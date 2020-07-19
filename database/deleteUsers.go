package database

import "fmt"

// DeleteUser removes a user from the database table 'users'
func DeleteUser(id string) (string, error) {

	sqlStatement := `
	DELETE FROM users
	WHERE id = $1
  RETURNING id, first_name, last_name, email;
  `
	var retID []uint8
	var retFirstName, retLastName, retEmail string

	err := db.QueryRow(sqlStatement, id).Scan(&retID, &retFirstName, &retLastName, &retEmail)
	if err != nil {
		return "", err
	}

	result := fmt.Sprintf("Record removed:\nID: %s,\nName: %s %s,\nEmail: %s", string(retID), retFirstName, retLastName, retEmail)
	return result, nil
}
