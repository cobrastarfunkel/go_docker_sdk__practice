package routes

import (
	"github.com/gin-gonic/gin"
)

func InitializeRoutes(router *gin.Engine) {
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"msg": "Hi!"})
	})

	apiGroup := router.Group("/api")

	registerContainerRoues(apiGroup)
	regiserImageRoutes(apiGroup)

}
