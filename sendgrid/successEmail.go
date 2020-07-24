package sendgrid

import (
	"os"

	"github.com/sendgrid/rest"
	sendgrid "github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

// SuccessEmail sends a success email to a user
func SuccessEmail(email, name, username string) (*rest.Response, error) {
	m := mail.NewV3Mail()

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
	Body := mail.GetRequestBody(m)

	request := sendgrid.GetRequest(os.Getenv("SENDGRID_API_KEY"), "/v3/mail/send", "https://api.sendgrid.com")
	request.Method = "POST"
	request.Body = Body
	response, err := sendgrid.API(request)
	if err != nil {
		return nil, err
	}
	return response, nil
}
