package handler

import (
	"fmt"
	"net/http"

	"notify.is-go/database"
	"notify.is-go/sendgrid"
)

// SignupDetails parses the form values
type SignupDetails struct {
	firstName string
	lastName  string
	email     string
	username  string
}

const (
	host     = "***REMOVED***"
	port     = 5432
	user     = "postgres"
	password = "***REMOVED***"
	dbname   = "notify"
)

// SignupForm exposes an API endpoint to send POST requests to
func SignupForm(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/signup" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	database.InitDB(psqlInfo)

	switch r.Method {
	case "GET":
		http.Redirect(w, r, "/signup", http.StatusSeeOther)
	case "POST":

		if r.Body != http.NoBody {

			// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
			if err := r.ParseForm(); err != nil {
				fmt.Fprintf(w, "ParseForm() err: %v", err)
				return
			}

			details := SignupDetails{
				firstName: r.FormValue("firstname"),
				lastName:  r.FormValue("lastname"),
				email:     r.FormValue("email"),
				username:  r.FormValue("username"),
			}

			fmt.Fprintf(w, "First name = %s\n", details.firstName)
			fmt.Fprintf(w, "Last name = %s\n", details.lastName)
			fmt.Fprintf(w, "Email address = %s\n", details.email)
			fmt.Fprintf(w, "Username = %s\n", details.username)

			result, err := database.InsertUser(details.firstName, details.lastName, details.email, details.username)
			if err != nil {
				panic(err)
			}

			sendgrid.SendEmail(details.email, details.firstName, details.username, "signup")

			fmt.Fprintf(w, "User inserted into DB\n%s", result)
		} else {
			fmt.Fprintf(w, "Request body is empty. No records inserted.")
		}
	default:
		fmt.Fprintf(w, "Only GET and POST methods are supported.")
	}
}
