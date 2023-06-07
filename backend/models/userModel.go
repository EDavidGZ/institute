package models

import "gorm.io/gorm"

type User struct {
	gorm.Model

	FirstName string `gorm:"not null" json:"firstname"`
	LastName  string `gorm:"not null" json:"lastname"`
	Email     string `gorm:"unique" `
	TypeUser  string `gorm:"not null" json:"typeuser"`
	UserName  string `gorm:"unique"`
	Password  string
	Actions   []Actions `json:"tasks"`
}
