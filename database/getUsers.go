package database

import (
	"database/sql"
)

// GetUsers will return a list of database IDs relating to a user's email address
func GetUsers(db *sql.DB, email string) (*sql.Rows, error) {

	sqlStatement := `
    SELECT id FROM users
    WHERE email = $1;
    `

	rows, err := db.Query(sqlStatement, email)
	if err != nil {
		return nil, err
	}

	return rows, nil
}
