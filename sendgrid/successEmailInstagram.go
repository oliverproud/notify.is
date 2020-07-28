package sendgrid

import (
	"fmt"
	"os"

	"github.com/sendgrid/rest"
	sendgrid "github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

// SuccessEmailInstagram sends a success email to a user
func SuccessEmailInstagram(email, name, username string) (*rest.Response, error) {
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

	switch response.StatusCode {
	case 200:
		return response, nil
	case 202:
		return response, nil
	default:
		return nil, fmt.Errorf("Sendgrid encountered an error: %d", response.StatusCode)
	}
}
