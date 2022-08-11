package provider

import (
	"log"

	"github.com/amirhnajafiz/stallion"
)

const (
	topic   = "provide"
	message = "base 76"
)

type Provider struct {
	Uri string
}

func (p *Provider) Start() {
	cli, err := stallion.NewClient(p.Uri)
	if err != nil {
		log.Printf("error: %v\n", err)

		return
	}

	_ = cli.Publish(topic, []byte(message))
}
