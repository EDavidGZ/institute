package models

import "gorm.io/gorm"

type Actions struct {
	gorm.Model

	Age         uint   `gorm:"not null" json:"age"`
	Description string `json:"description"`
	Teacher     string `json:"teacher"`
	Level       uint   `json:"level"`
	UserId      uint   `json:"user_id"`
}
