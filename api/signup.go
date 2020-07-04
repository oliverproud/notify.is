package handler

import (
	"fmt"
	"net/http"
	"os"

	"notify.is-go/database"
)

// SignupDetails parses the form values
type SignupDetails struct {
	firstName string
	lastName  string
	email     string
	username  string
}

const (
	host   = "oliverproud.ddns.net"
	port   = 5432
	user   = "oliverproud"
	dbname = "notify"
)

// SignupForm exposes an API endpoint to send POST requests to
func SignupForm(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/signup" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, os.Getenv("DB_PASSWORD"), dbname)
	database.InitDB(psqlInfo)

	defer database.CloseDB()
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

	fmt.Fprintf(w, "User inserted into db %s\n", result)

}
