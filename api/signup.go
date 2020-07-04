package handler

import (
	"fmt"
	"net/http"
)

type ContactDetails struct {
	firstName string
	lastName  string
	email     string
	username  string
}

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/signup" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}
	// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "ParseForm() err: %v", err)
		return
	}
	fmt.Fprintf(w, "Post from website! r.PostFrom = %v\n", r.PostForm)
	details := ContactDetails{
		firstName: r.FormValue("firstname"),
		lastName:  r.FormValue("lastname"),
		email:     r.FormValue("email"),
		username:  r.FormValue("username"),
	}
	fmt.Fprintf(w, "First name = %s\n", details.firstName)
	fmt.Fprintf(w, "Last name = %s\n", details.lastName)
	fmt.Fprintf(w, "Email address = %s\n", details.email)
	fmt.Fprintf(w, "Username = %s\n", details.username)

	w.Write([]byte(fmt.Sprintf("%v", details)))

}
