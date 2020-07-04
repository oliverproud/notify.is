package handler

import (
	"fmt"
	"net/http"
)

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
	firstName := r.FormValue("firstname")
	lastName := r.FormValue("lastname")
	email := r.FormValue("email")
	username := r.FormValue("username")
	fmt.Fprintf(w, "First name = %s\n", firstName)
	fmt.Fprintf(w, "Last name = %s\n", lastName)
	fmt.Fprintf(w, "Email address = %s\n", email)
	fmt.Fprintf(w, "Username = %s\n", username)

}
