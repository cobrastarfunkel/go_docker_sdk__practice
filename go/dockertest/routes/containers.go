package routes

import (
	"context"
	"dockertest/middleware"
	"log"

	"github.com/docker/docker/api/types"
	"github.com/gin-gonic/gin"
)

func registerContainerRoues(router *gin.RouterGroup) {
	containersGroup := router.Group("/containers")
	containersGroup.GET("/list", listContainers())
}

func listContainers() gin.HandlerFunc {
	cli, err := middleware.GetClient()
	if err != nil {
		log.Panic(err)
	}

	containers, err := cli.ContainerList(context.Background(), types.ContainerListOptions{})

	return func(c *gin.Context) {
		if err != nil {
			c.JSON(404, gin.H{"message": "bad req"})
		}
		c.JSON(200, containers)
	}
}
