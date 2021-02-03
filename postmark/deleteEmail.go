package postmark

import (
	"fmt"
	"os"

	"github.com/keighl/postmark"
)

func init() {
	client = postmark.NewClient(os.Getenv("SERVER_TOKEN"), os.Getenv("ACCOUNT_TOKEN"))
}

func sendDeleteEmail(email, name, url string) error {

	var deleteEmail = postmark.TemplatedEmail{

		From:          "support@notify.is",
		To:            email,
		ReplyTo:       "support@notify.is",
		TemplateId:    22093665,
		TemplateAlias: "success-email",
		TemplateModel: map[string]interface{}{
			"product_url":   "https://notify.is",
			"name":          name,
			"product_name":  "Notify.is",
			"action_url":    url,
			"support_email": "support@notify.is",
		},
	}
	res, err := client.SendTemplatedEmail(deleteEmail)
	if err != nil {
		return err
	}

	fmt.Println(res)
	return nil
}
