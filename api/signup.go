package handler

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/getsentry/sentry-go"
	"notify.is/postmark"
	//Postgres driver
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// SignupDetails parses the form values
type SignupDetails struct {
	firstName string
	email     string
	username  string
	service   string
}

// User database struct
type User struct {
	gorm.Model
	Instagram, Twitter, Github bool
	FirstName, Email, Username string
	ID                         string    `gorm:"default:uuid_generate_v4()"`
	Timestamp                  time.Time `gorm:"default:timezone('utc'::text, now())"`
}

// SignupForm exposes a REST API to send POST requests to
func SignupForm(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path != "/api/signup" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	var instagram, twitter, github bool

	switch r.Method {
	case "GET":
		http.Redirect(w, r, "/signup", http.StatusSeeOther)
	case "POST":

		if r.Body != http.NoBody {

			// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
			if err := r.ParseForm(); err != nil {
				sentry.CaptureException(err)
				fmt.Fprintln(w, "ParseForm() err:", err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			details := SignupDetails{
				firstName: strings.Title(strings.ToLower(r.FormValue("firstName"))),
				email:     strings.ToLower(r.FormValue("email")),
				username:  r.FormValue("username"),
				service:   r.FormValue("switchGroup"),
			}

			// The array of switch values are sent as concatenated string
			services := strings.Split(details.service, ",")

			// Update boolean value relevant to services selected
			for i := range services {
				if services[i] == "instagram" {
					instagram = true
				} else if services[i] == "twitter" {
					twitter = true
				} else if services[i] == "github" {
					github = true
				}
			}

			log.Println("Inserting into DB")
			// Create user
			user := User{FirstName: details.firstName, Username: details.username, Email: details.email, Instagram: instagram, Twitter: twitter, Github: github}
			result := db.Create(&user)

			if result.Error != nil {
				sentry.CaptureException(result.Error)
				log.Println(result.Error)
				http.Error(w, result.Error.Error(), http.StatusInternalServerError)
				return
			}
			log.Println("User inserted into DB")

			// Sends signup email
			resp, err := postmark.SendWelcomeEmail(details.email, details.firstName, details.username, instagram, twitter, github)
			if err != nil {
				sentry.CaptureException(err)
				log.Println(err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			log.Printf("Postmark response: %v %s\n", resp.ErrorCode, resp.Message)

			fmt.Fprintln(w, "User inserted into DB")
			fmt.Fprintf(w, "Postmark response: %v %s\n", resp.ErrorCode, resp.Message)
		} else {
			fmt.Fprintln(w, "Request body is empty. No records inserted.")
		}
	default:
		fmt.Fprintln(w, "Only GET and POST methods are supported.")
	}
}

var db *gorm.DB

func init() {

	// To initialize Sentry's handler, you need to initialize Sentry itself beforehand
	if err := sentry.Init(sentry.ClientOptions{
		Dsn: os.Getenv("SENTRY_DSN"),
	}); err != nil {
		fmt.Printf("Sentry initialization failed: %v\n", err)
	}

	// Flush buffered events before the program terminates.
	defer sentry.Flush(2 * time.Second)

	var port = 5432
	var dbUser = os.Getenv("DB_USER")
	var dbName = os.Getenv("DB_NAME")
	var host = os.Getenv("DB_HOST")
	var password = os.Getenv("DB_PASSWORD")

	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=require", host, port, dbUser, password, dbName)

	// Open database connection
	var err error
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	//Migrate the schema
	db.AutoMigrate(&User{})
}

// func main() {
//
// 	log.Print("Starting server...")
//
// 	http.HandleFunc("/api/signup", SignupForm)
//
// 	log.Printf("Listening on port 8080")
// 	log.Fatal(http.ListenAndServe(":8080", nil))
// }
