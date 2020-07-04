package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var db *sql.DB

//InitDB initialises a database instance
func InitDB(dataSourceName string) {
	var err error
	db, err = sql.Open("postgres", dataSourceName)
	if err != nil {
		log.Panic(err)
	}

	if err = db.Ping(); err != nil {
		log.Panic(err)
	}

	// defer db.Close()
}

// CloseDB closes the database connection
func CloseDB() error {
	fmt.Println("DB Closed")
	return db.Close()
}
