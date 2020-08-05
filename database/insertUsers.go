package database

import (
	"database/sql"
)

//InsertUser inserts a new user into the database table 'users'
func InsertUser(db *sql.DB, firstName, email, username string, instagram, twitter, github bool) error {

	sqlStatement := `
  INSERT INTO users (first_name, email, username, instagram, twitter, github)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING id`

	var id []uint8
	err := db.QueryRow(sqlStatement, firstName, email, username, instagram, twitter, github).Scan(&id)
	if err != nil {
		return err
	}

	return nil
}
