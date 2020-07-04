package handler

import (
	"fmt"
	"net/http"
	"os"

	"notify.is-go/database"
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

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", os.Getenv("HOST"), port, user, os.Getenv("PASSWORD"), dbname)
	database.InitDB(psqlInfo)

	defer database.CloseDB()

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

	result, err := database.DeleteUser(details.firstName, details.lastName, details.email)
	if err != nil {
		panic(err)
	}

	fmt.Fprintf(w, "%s\n", result)

}
