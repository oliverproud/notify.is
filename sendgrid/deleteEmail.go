package sendgrid

import (
	"os"

	"github.com/sendgrid/rest"
	sendgrid "github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

// DeleteEmail sends an information deletion email to a user
func DeleteEmail(email, name, link string) (*rest.Response, error) {
	m := mail.NewV3Mail()

	e := mail.NewEmail(fromName, fromAddress)
	m.SetFrom(e)

	m.SetTemplateID("d-d4a93d70f08d4af5a54c2c155b0bb1ab")

	p := mail.NewPersonalization()
	tos := []*mail.Email{
		mail.NewEmail(name, email),
	}
	p.AddTos(tos...)

	p.SetDynamicTemplateData("first_name", name)
	p.SetDynamicTemplateData("deletion_link", link)

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
