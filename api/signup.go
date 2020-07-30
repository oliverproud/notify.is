package handler

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/getsentry/sentry-go"
	"notify.is/database"
	"notify.is/sendgrid"
	//Postgres driver
	_ "github.com/lib/pq"
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

	var err error
	var result string
	var instagram, twitter, github bool

	switch r.Method {
	case "GET":
		http.Redirect(w, r, "/signup", http.StatusSeeOther)
	case "POST":

		if r.Body != http.NoBody {

			// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
			if err := r.ParseForm(); err != nil {
				fmt.Fprintf(w, "ParseForm() err: %v", err)
				sentry.CaptureException(err)
				return
			}

			details := SignupDetails{
				firstName: r.FormValue("firstName"),
				lastName:  r.FormValue("lastName"),
				email:     r.FormValue("email"),
				username:  r.FormValue("username"),
				service:   r.FormValue("switchGroup"),
			}

			// switch group is receieved as a concatenated string
			services := strings.Split(details.service, ",")

			// Update boolean value relevant to services selected
			for i := range services {
				if services[i] == "instagram" {
					instagram = true
				} else if services[i] == "twitter" {
					twitter = true
				} else {
					github = true
				}
			}

			log.Println("Inserting into DB")
			result, err = database.InsertUser(db, details.firstName, details.lastName, details.email, details.username, instagram, twitter, github)
			if err != nil {
				sentry.CaptureException(err)
				log.Printf("%v", err)
			}
			log.Println(result)

			// Sends signup email
			resp, err := sendgrid.SignupEmail(details.email, details.firstName, details.username)
			if err != nil {
				sentry.CaptureException(err)
				log.Println(err)
			}

			log.Println("Sendgrid Response:", resp.StatusCode)
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

	// To initialize Sentry's handler, you need to initialize Sentry itself beforehand
	if err := sentry.Init(sentry.ClientOptions{
		Dsn: os.Getenv("SENTRY_DSN"),
	}); err != nil {
		fmt.Printf("Sentry initialization failed: %v\n", err)
	}

	// Flush buffered events before the program terminates.
	defer sentry.Flush(2 * time.Second)

	const (
		port   = 5432
		user   = "postgres"
		dbName = "notify"
	)

	var host = os.Getenv("DB_HOST")
	var password = os.Getenv("DB_PASSWORD")

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=require", host, port, user, password, dbName)

	// Open database connection
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		sentry.CaptureException(err)
		fmt.Printf("%v\n", err)
		return
	}
	if err = db.Ping(); err != nil {
		sentry.CaptureException(err)
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
