package database

import (
	"database/sql"
	"fmt"
)

//InsertUser inserts a new user into the database table 'users'
func InsertUser(db *sql.DB, firstName, lastName, email, username string, instagram, twitter bool) (string, error) {

	sqlStatement := `
  INSERT INTO users (first_name, last_name, email, username, instagram, twitter)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING id`

	var id []uint8
	err := db.QueryRow(sqlStatement, firstName, lastName, email, username, instagram, twitter).Scan(&id)
	if err != nil {
		return "", err
	}

	result := fmt.Sprintf("User inserted into DB")

	return result, nil
}
