package sendgrid

import (
	"os"

	"github.com/sendgrid/rest"
	sendgrid "github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

const (
	fromName    = "Notify Support"
	fromAddress = "support@notify.is"
)

// SignupEmail sends a signup confirmation email to the user
func SignupEmail(email, name, username string) (*rest.Response, error) {
	m := mail.NewV3Mail()

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
