package controllers

import (
	"github/EDavidGZ/backend/initializers"
	"github/EDavidGZ/backend/models"

	// "github/EDavidGZ/backend/modeloRemoto"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v4"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func Singup(c *gin.Context) {
	var body struct {
		FirstName string
		LastName  string
		Email     string
		TypeUser  string
		UserName  string
		Password  string
		Actions   []string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to reaq body",
		})
		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to hash password",
		})
		return
	}

	//create users
	user := models.User{FirstName: body.FirstName, LastName: body.LastName, Email: body.Email, TypeUser: body.TypeUser, UserName: body.UserName, Password: string(hash)}
	result := initializers.DB.Create(&user) // pass pointer of data to Create

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create users",
		})
		return

	}

	//response
	c.JSON(http.StatusOK, gin.H{})

}

func Login(c *gin.Context) {
	var body struct {
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to reaq body",
		})
		return
	}

	//look up requested uwer
	var user models.User
	initializers.DB.First(&user, "email = ?", body.Email)

	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid email or password",
		})
		return

	}

	//compare sent in pass with saved user pass
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid email or password",
		})
		return

	}

	// Generate a JWT token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed email or password",
		})
		return

	}

	//send it back
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{})

}

func Validation(c *gin.Context) {
	user, _ := c.Get("user")

	c.JSON(http.StatusOK, gin.H{
		"message": user,
	})
}

// func GetUserHandler(w http.ResponseWriter, r *http.Request) {

// 	var user modeloRemoto.User
// 	params := mux.Vars(r)

// 	fmt.Println("datos de ruta:", r.Header)

// 	initializers.CONNECT.First(&user, params["id"])
// 	if user.ID == 0 {
// 		w.WriteHeader(http.StatusNotFound)
// 		w.Write([]byte("User not found"))
// 	}

// 	initializers.CONNECT.Model(&user).Association("Tasks").Find(&user.Task)
// 	json.NewEncoder(w).Encode(&user)
// }
