package handler

import (
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strings"

	"github.com/getsentry/sentry-go"
	"notify.is/sendgrid"
)

// DeletionDetails parses the form values
type DeletionDetails struct {
	firstName string
	email     string
}

// DeleteForm exposes a REST API to send POST requests to
func DeleteForm(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/delete" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	switch r.Method {
	case "GET":

		// Get parameters from URL
		keys, ok := r.URL.Query()["id"]
		if !ok || len(keys[0]) < 1 {
			http.Redirect(w, r, "/delete", http.StatusSeeOther)
		}
		http.Redirect(w, r, "/deleted", http.StatusSeeOther)

		for _, v := range keys {
			var user User
			user.ID = v
			result := db.Delete(&user)
			if result.Error != nil {
				sentry.CaptureException(result.Error)
				log.Println(result.Error)
				http.Error(w, result.Error.Error(), http.StatusInternalServerError)
				return
			}
			log.Println(result)
		}

	case "POST":

		if r.Body != http.NoBody {

			// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
			if err := r.ParseForm(); err != nil {
				sentry.CaptureException(err)
				log.Println(err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			details := DeletionDetails{
				firstName: strings.Title(strings.ToLower(r.FormValue("firstName"))),
				email:     strings.ToLower(r.FormValue("email")),
			}

			rows, err := db.Model(&User{}).Where("email = ?", details.email).Rows()
			if err != nil {
				sentry.CaptureException(err)
				log.Println(err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			// Base URL that encoded parameters will be appended
			base, err := url.Parse("https://notify.is/api/delete")
			if err != nil {
				sentry.CaptureException(err)
				log.Println(err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			// Query params
			params := url.Values{}

			defer rows.Close()
			// Loop through rows returned by DB query
			for rows.Next() {
				var user User

				// Convert DB IDs to strings, add as parameters to URL values
				params.Add("id", user.ID)
			}

			// Get any error encountered during iteration
			if err = rows.Err(); err != nil {
				sentry.CaptureException(err)
				log.Println(err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			if len(params) == 0 {
				log.Println("No user IDs found relating to: ", details.email)
				return
			}

			// Create final URL using base URL and encoded parameters
			base.RawQuery = params.Encode()

			// Sends deletion confirmation email
			resp, err := sendgrid.DeleteEmail(details.email, details.firstName, base.String())
			if err != nil {
				sentry.CaptureException(err)
				log.Println(err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			log.Println("SendGrid Response:", resp.StatusCode)

			fmt.Fprintln(w, "User details retrieved")
			fmt.Fprintln(w, "SendGrid Response:", resp.StatusCode)
		} else {
			fmt.Fprintf(w, "Request body is empty. No information submitted.")
		}
	default:
		fmt.Fprintf(w, "Only GET and POST methods are supported.")
	}
}

// func main() {
//
// 	log.Print("Starting server...")
//
// 	http.HandleFunc("/api/delete", DeleteForm)
//
// 	log.Printf("Listening on port 8080")
// 	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", "8080"), nil))
// }
