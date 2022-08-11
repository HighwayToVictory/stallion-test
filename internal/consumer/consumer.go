package consumer

import (
	"log"

	"github.com/amirhnajafiz/stallion"
)

type Consumer struct {
	Uri string
}

const (
	topic = "provide"
)

func (c *Consumer) Start() {
	cli, err := stallion.NewClient(c.Uri)
	if err != nil {
		log.Printf("error: %v\n", err)

		return
	}

	channel := make(chan []byte)

	cli.Subscribe(topic, func(bytes []byte) {
		channel <- bytes
	})

	for {
		message := <-channel

		log.Printf("%s\n", string(message))
	}
}
