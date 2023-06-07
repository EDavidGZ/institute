package main

import (
	"github/EDavidGZ/backend/controllers"
	"github/EDavidGZ/backend/initializers"
	"github/EDavidGZ/backend/middleware"

	// "github.com/gin-contrib/cors"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()
	initializers.SyncDtabase()
}

func main() {
	r := gin.Default()
	r.POST("/signup", controllers.Singup)
	r.POST("/login", controllers.Login)
	r.GET("/validate", middleware.RequireAuth, controllers.Validation)
	r.GET("/users", controllers.GetUsers)
	r.GET("/users/:id", controllers.GetUser)
	r.PUT("/users/:id", controllers.UpdateUser)
	r.DELETE("/users/:id", controllers.Delete)

	// config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"http://google.com"}
	// r.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{"*", "http://localhost:3000", "http://localhost:5173/"},
	// 	AllowHeaders:     []string{"Origin"},
	// 	AllowMethods:     []string{"GET", "DELETE", "POST", "PUT"},
	// 	AllowCredentials: true,
	// }))
	// config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"*", "http://localhost:3000/"}
	// // config.AllowOrigins = []string{"http://google.com", "http://facebook.com"}
	// // config.AllowAllOrigins = true

	// r.Use(cors.New(config))
	// Enable CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173/"} // Replace with your client's URL
	r.Use(cors.New(config))

	// Define your routes here
	// ...

	r.Run()
	// r.Run() // listen and serve on 0.0.0.0:8080}
}

// func CORSMiddleware() gin.HandlerFunc {
// 	return func(c *gin.Context) {

// 		c.Header("Access-Control-Allow-Origin", "*")
// 		c.Header("Access-Control-Allow-Credentials", "true")
// 		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
// 		c.Header("Access-Control-Allow-Methods", "POST,HEAD,PATCH, OPTIONS, GET, PUT")

// 		if c.Request.Method == "OPTIONS" {
// 			c.AbortWithStatus(204)
// 			return
// 		}

// 		c.Next()
// 	}
// }
