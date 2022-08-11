package server

import (
	"log"

	"github.com/amirhnajafiz/stallion"
)

type Server struct {
	Port string
}

func (s *Server) Start() {
	if err := stallion.NewServer(s.Port); err != nil {
		log.Printf("error: %v\n", err)
	}
}
