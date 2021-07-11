package routes

import (
	"context"
	"dockertest/middleware"
	"log"

	"github.com/docker/docker/api/types"
	"github.com/gin-gonic/gin"
)

func regiserImageRoutes(router *gin.RouterGroup) {
	imagesGroup := router.Group("/images")
	imagesGroup.GET("/list", listImages())
}

func listImages() gin.HandlerFunc {
	cli, err := middleware.GetClient()
	if err != nil {
		log.Panic(err)
	}

	images, err := cli.ImageList(context.Background(), types.ImageListOptions{})
	return func(c *gin.Context) {
		if err != nil {
			c.JSON(404, gin.H{"message": "bad req"})
		}
		c.JSON(200, images)
	}

}
