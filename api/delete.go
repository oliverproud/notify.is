package handler

import (
	"fmt"
	"log"
	"net/http"
	"net/url"

	"notify.is/database"
	"notify.is/sendgrid"
)

// DeletionDetails parses the form values
type DeletionDetails struct {
	firstName string
	lastName  string
	email     string
}

// DeleteForm exposes an API endpoint to send POST requests to
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
			result, err := database.DeleteUser(v)
			if err != nil {
				log.Println(err)
			}
			log.Printf("%v\n", result)
		}

	case "POST":

		if r.Body != http.NoBody {

			// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
			if err := r.ParseForm(); err != nil {
				fmt.Fprintf(w, "ParseForm() err: %v", err)
				return
			}

			details := DeletionDetails{
				firstName: r.FormValue("firstName"),
				lastName:  r.FormValue("lastName"),
				email:     r.FormValue("email"),
			}

			var id []uint8
			rows, err := database.GetUsers(details.email)
			if err != nil {
				log.Println(err)
			}

			// Base URL that will have encoded parameters appended to
			base, err := url.Parse("https://notify.is/api/delete")
			if err != nil {
				log.Println(err)
				return
			}
			// Query params
			params := url.Values{}

			// Loop through rows returned by DB query
			for rows.Next() {
				if err := rows.Scan(&id); err != nil {
					log.Println(err)
				}
				// Convert DB IDs to strings, add as parameters to URL values
				params.Add("id", string(id))
			}

			if len(params) == 0 {
				log.Println("No user IDs found relating to: ", details.email)
				return
			}

			// Create final URL using base URL and encoded parameters
			base.RawQuery = params.Encode()
			log.Println(base)

			// Sends deletion confirmation email
			resp, err := sendgrid.DeleteEmail(details.email, details.firstName, base.String())
			if err != nil {
				log.Println(err)
			} else {
				log.Println("Sendgrid Response:", resp.StatusCode)
			}
		} else {
			fmt.Fprintf(w, "Request body is empty. No information submitted.")
		}
	default:
		fmt.Fprintf(w, "Only GET and POST methods are supported.")
	}
}

// func main() {
//
// Setenv here
//
// 	log.Print("Starting server...")
//
// 	http.HandleFunc("/api/delete", DeleteForm)
//
// 	log.Printf("Listening on port 8080")
// 	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", "8080"), nil))
// }
