package postmark

import (
	"os"

	"github.com/keighl/postmark"
)

var client *postmark.Client

func init() {
	client = postmark.NewClient(os.Getenv("SERVER_TOKEN"), os.Getenv("ACCOUNT_TOKEN"))
}

func SendWelcomeEmail(email, name, username string, instagram, twitter, github bool) (postmark.EmailResponse, error) {

	var welcomeEmail = postmark.TemplatedEmail{

		From:          "support@notify.is",
		To:            email,
		ReplyTo:       "support@notify.is",
		TemplateId:    22085883,
		TemplateAlias: "welcome-email",
		TemplateModel: map[string]interface{}{
			"product_url":   "https://notify.is",
			"name":          name,
			"product_name":  "Notify.is",
			"username":      username,
			"instagram":     instagram,
			"twitter":       twitter,
			"github":        github,
			"support_email": "support@notify.is",
		},
	}
	res, err := client.SendTemplatedEmail(welcomeEmail)
	if err != nil {
		return res, err
	}

	return res, nil
}
