package initializers

import "github/EDavidGZ/backend/models"

func SyncDtabase() {
	DB.AutoMigrate(&models.User{})
	DB.AutoMigrate(&models.Actions{})
}
