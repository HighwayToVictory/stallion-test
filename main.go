package main

import (
	"github.com/HighwayToVictory/stallion-test/internal/consumer"
	"github.com/HighwayToVictory/stallion-test/internal/provider"
	"github.com/HighwayToVictory/stallion-test/internal/server"
)

const (
	numberOfConsumers = 20
	numberOfProviders = 2
)

func main() {
	port := ":4000"
	uri := "localhost" + port

	s := server.Server{
		Port: port,
	}

	go s.Start()

	for i := 0; i < numberOfConsumers; i++ {
		c := consumer.Consumer{
			Uri: uri,
		}

		go c.Start()
	}

	for i := 0; i < numberOfProviders; i++ {
		p := provider.Provider{
			Uri: uri,
		}

		go p.Start()
	}

	select {}
}
