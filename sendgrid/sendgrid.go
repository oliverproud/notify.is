// Package sendgrid sends Dynamic Template emails using SendGrid's Go Library
// https://github.com/sendgrid/sendgrid-go
package sendgrid

import (
	"log"
	"os"

	sendgrid "github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

func signupEmail(email, name, username string) []byte {
	m := mail.NewV3Mail()

	fromName := "Notify Support"
	fromAddress := "support@notify.is"
	e := mail.NewEmail(fromName, fromAddress)
	m.SetFrom(e)

	m.SetTemplateID("d-0449de6d2d8c431a9adb9f079bce3cc7")

	p := mail.NewPersonalization()
	tos := []*mail.Email{
		mail.NewEmail(name, email),
	}
	p.AddTos(tos...)

	p.SetDynamicTemplateData("first_name", name)
	p.SetDynamicTemplateData("username", username)

	m.AddPersonalizations(p)
	return mail.GetRequestBody(m)
}

func successEmail(email, name, username string) []byte {
	m := mail.NewV3Mail()

	fromName := "Notify Support"
	fromAddress := "support@notify.is"
	e := mail.NewEmail(fromName, fromAddress)
	m.SetFrom(e)

	m.SetTemplateID("d-8d0bb30d08564ee39fe261040db6f9c3")

	p := mail.NewPersonalization()
	tos := []*mail.Email{
		mail.NewEmail(name, email),
	}
	p.AddTos(tos...)

	p.SetDynamicTemplateData("first_name", name)
	p.SetDynamicTemplateData("username", username)

	m.AddPersonalizations(p)
	return mail.GetRequestBody(m)
}

// SendEmail sends a Dynamic Template email using SendGrid API
func SendEmail(email, name, username, emailType string) {
	request := sendgrid.GetRequest(os.Getenv("SENDGRID_API_KEY"), "/v3/mail/send", "https://api.sendgrid.com")
	request.Method = "POST"
	var Body []byte
	if emailType == "success" {
		Body = successEmail(email, name, username)
	} else {
		Body = signupEmail(email, name, username)
	}
	request.Body = Body
	response, err := sendgrid.API(request)
	if err != nil {
		log.Printf("%v", err)
	} else {
		log.Printf("%v", response.StatusCode)
	}
}
