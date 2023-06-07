package controllers

import (
	"fmt"
	"github/EDavidGZ/backend/initializers"
	"github/EDavidGZ/backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	var users []models.User
	initializers.DB.Find(&users)

	c.JSON(http.StatusOK, gin.H{
		"message": users,
	})
}
func GetUser(c *gin.Context) {
	id := c.Param("id")
	var user models.User

	result := initializers.DB.First(&user, id)
	fmt.Println("Este es results: ", result)

	if result.Error != nil {
		c.AbortWithError(http.StatusNotFound, result.Error)
		return
	}

	c.JSON(http.StatusOK, &user)

}

//Data Updat6e

type UpdateUserBody struct {
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Email     string `json:"email"`
	TypeUser  string `json:"typeuser"`
	UserName  string `json:"username"`
	Password  string
}

func UpdateUser(c *gin.Context) {
	id := c.Param("id")
	body := UpdateUserBody{}

	err := c.BindJSON(&body)

	if err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}

	var user models.User

	result := initializers.DB.First(&user, id)

	if result.Error != nil {
		c.AbortWithError(http.StatusNotFound, result.Error)
		return
	}

	user.FirstName = body.FirstName
	user.LastName = body.LastName
	user.Email = body.Email
	user.TypeUser = body.TypeUser
	user.UserName = body.UserName
	user.Password = body.Password

	initializers.DB.Save(&user)

	c.JSON(http.StatusOK, &user)

}

func Delete(c *gin.Context) {
	id := c.Param("id")

	var user models.User

	result := initializers.DB.First(&user, id)

	if result.Error != nil {
		c.AbortWithError(http.StatusNotFound, result.Error)
		return
	}

	initializers.DB.Unscoped().Delete(&user)

	c.Status(http.StatusOK)
}
