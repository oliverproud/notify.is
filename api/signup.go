package handler

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"notify.is/database"
	"notify.is/sendgrid"
)

// SignupDetails parses the form values
type SignupDetails struct {
	firstName string
	lastName  string
	email     string
	username  string
	service   string
}

// SignupForm exposes an API endpoint to send POST requests to
func SignupForm(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/signup" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

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
				firstName: r.FormValue("firstName"),
				lastName:  r.FormValue("lastName"),
				email:     r.FormValue("email"),
				username:  r.FormValue("username"),
				service:   r.FormValue("switchGroup"),
			}

			services := strings.Split(details.service, ",")

			var result string
			var err error

			if len(services) > 1 {
				log.Println("Inserting both services")
				result, err = database.InsertUser(db, details.firstName, details.lastName, details.email, details.username, true, true)
				if err != nil {
					log.Printf("%v", err)
				}
			} else {
				if services[0] == "instagram" {
					log.Println("Instagram was selected, inserting Instagram")
					result, err = database.InsertUser(db, details.firstName, details.lastName, details.email, details.username, true, false)
					if err != nil {
						log.Printf("%v", err)
					}
				} else {
					log.Println("Twitter was selected, inserting Twitter")
					result, err = database.InsertUser(db, details.firstName, details.lastName, details.email, details.username, false, true)
					if err != nil {
						log.Printf("%v", err)
					}
				}
			}
			log.Println(result)

			// Sends signup email
			resp, err := sendgrid.SignupEmail(details.email, details.firstName, details.username)
			if err != nil {
				log.Println(err)
			} else {
				log.Println("Sendgrid Response:", resp.StatusCode)
			}
			fmt.Fprintf(w, "\n%s", result)
		} else {
			fmt.Fprintf(w, "Request body is empty. No records inserted.")
		}
	default:
		fmt.Fprintf(w, "Only GET and POST methods are supported.")
	}
}

var db *sql.DB

func init() {

	// Setenv here

	const (
		port   = 5432
		user   = "postgres"
		dbName = "notify"
	)

	var host = os.Getenv("DB_HOST")
	var password = os.Getenv("DB_PASSWORD")

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=require", host, port, user, password, dbName)

	var err error
	db, err = sql.Open("postgres", psqlInfo)
	if err != nil {
		fmt.Printf("%v", err)
		fmt.Println("Returning...")
		return
	}
	if err = db.Ping(); err != nil {
		log.Fatal(err)
	}
}

// func main() {
//
// 	log.Print("Starting server...")
//
// 	http.HandleFunc("/api/signup", SignupForm)
//
// 	log.Printf("Listening on port ***REMOVED***")
// 	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", "***REMOVED***"), nil))
// }
