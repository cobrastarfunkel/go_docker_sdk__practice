package main

import (
	"dockertest/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()
	router.Use(cors.Default())

	routes.InitializeRoutes(router)

	router.Run()
}
