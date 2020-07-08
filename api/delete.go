package handler

import (
	"os"
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

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=require", os.Getenv("DB_HOST"), port, user, os.Getenv("DB_PASSWORD"), dbname)
	database.InitDB(psqlInfo)

	switch r.Method {
	case "GET":
		// http.Redirect(w, r, "/delete", http.StatusSeeOther)

		// Get parameters from URL
		keys, ok := r.URL.Query()["id"]
		if !ok || len(keys[0]) < 1 {
			return
		}
		fmt.Fprintf(w, "Parameter IDs:%v\n", keys)

		for _, v := range keys {
			result, err := database.DeleteUser(v)
			if err != nil {
				log.Println(err)
			}
			fmt.Fprintf(w, "%v\n", result)
		}

	case "POST":

		if r.Body != http.NoBody {

			// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
			if err := r.ParseForm(); err != nil {
				fmt.Fprintf(w, "ParseForm() err: %v", err)
				return
			}

			details := DeletionDetails{
				firstName: r.FormValue("firstname"),
				lastName:  r.FormValue("lastname"),
				email:     r.FormValue("email"),
			}

			fmt.Fprintf(w, "First name = %s\n", details.firstName)
			fmt.Fprintf(w, "Last name = %s\n", details.lastName)
			fmt.Fprintf(w, "Email address = %s\n", details.email)

			var id []uint8
			rows, err := database.GetUsers(details.email)
			if err != nil {
				log.Fatal(err)
			}

			// Base URL that will have encoded parameters appended to
			base, err := url.Parse("https://notify-is-git-development.oliverproud.vercel.app/api/delete")
			if err != nil {
				return
			}
			// Query params
			params := url.Values{}

			// Loop through rows returned by DB query
			for rows.Next() {
				err := rows.Scan(&id)
				if err != nil {
					log.Fatal(err)
				}
				// Convert DB IDs to strings, add as parameters to URL values
				params.Add("id", string(id))
			}
			// Create final URL using base URL and encoded parameters
			base.RawQuery = params.Encode()
			fmt.Println(base)

			sendgrid.SendEmail(details.email, details.firstName, "", base.String(), "delete")

		} else {
			fmt.Fprintf(w, "Request body is empty. No records deleted.")
		}
	default:
		fmt.Fprintf(w, "Only GET and POST methods are supported.")
	}
}


// func main() {
// 	http.HandleFunc("/api/delete/", DeleteForm)
// 	http.ListenAndServe(":***REMOVED***", nil)
// }
