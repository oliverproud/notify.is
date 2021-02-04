package postmark

import (
	"fmt"
	"os"

	"github.com/keighl/postmark"
)

func init() {
	client = postmark.NewClient(os.Getenv("SERVER_TOKEN"), os.Getenv("ACCOUNT_TOKEN"))
}

func sendSuccessEmail(email, name, username, service string) error {

	var successEmail = postmark.TemplatedEmail{

		From:          "support@notify.is",
		To:            email,
		ReplyTo:       "support@notify.is",
		TemplateId:    22097800,
		TemplateAlias: "success-email",
		TemplateModel: map[string]interface{}{
			"product_url":   "https://notify.is",
			"name":          name,
			"username":      username,
			"service":       service,
			"support_email": "support@notify.is",
			"product_name":  "Notify.is",
		},
	}
	res, err := client.SendTemplatedEmail(successEmail)
	if err != nil {
		return err
	}

	fmt.Println(res)
	return nil
}
