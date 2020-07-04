package database

import "fmt"

// DeleteUser removes a user from the database table 'users'
func DeleteUser(firstName, lastName, email string) (string, error) {

	sqlStatement := `
	DELETE FROM users
	WHERE first_name = $1 AND last_name = $2 AND email = $3
  RETURNING id, first_name, last_name, email;
  `
	var id int
	var retFirstName, retLastName, retEmail string

	err := db.QueryRow(sqlStatement, firstName, lastName, email).Scan(&id, &retFirstName, &retLastName, &retEmail)
	if err != nil {
		return "", err
	}

	result := fmt.Sprintf("Record removed:\nID: %d,\nName: %s %s,\nEmail: %s", id, retFirstName, retLastName, retEmail)
	return result, nil
}
