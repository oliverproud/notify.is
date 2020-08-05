package database

import (
	"database/sql"
	"fmt"
)

// DeleteUser removes a user from the database table 'users'
func DeleteUser(db *sql.DB, id string) (string, error) {

	sqlStatement := `
	DELETE FROM users
	WHERE id = $1
  RETURNING id, first_name, email;
  `
	var retID []uint8
	var retFirstName, retEmail string

	err := db.QueryRow(sqlStatement, id).Scan(&retID, &retFirstName, &retEmail)
	if err != nil {
		return "", err
	}

	result := fmt.Sprintf("Record removed:\nID: %s,\nName: %s,\nEmail: %s", string(retID), retFirstName, retEmail)
	return result, nil
}
