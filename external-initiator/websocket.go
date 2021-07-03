package main

import (
	"encoding/json"
	"log"
	"os"

	"github.com/gorilla/websocket"
)

type WebSocket struct {
	Endpoint string
}

type wsConn struct {
	connection *websocket.Conn
	open       bool
}

//Connect connects to the websocket.
func (ws WebSocket) Connect() wsConn {
	c, _, err := websocket.DefaultDialer.Dial(ws.Endpoint, nil)
	if err != nil {
		log.Fatal("Error dialing: ", err)
	}

	con := wsConn{
		connection: c,
		open:       true,
	}
	return con
}

//Subscribe subscribes to transaction events.
func (con wsConn) Subscribe(message string) {
	defer con.connection.Close()

	interrupt := make(chan os.Signal, 1)

	done := make(chan struct{})

	err := con.connection.WriteMessage(websocket.TextMessage, []byte(message))

	if err != nil {
		con.open = false
		log.Fatal("Error subscibing to tx: ", err)
	}

	go func() {
		defer close(done)
		for {
			_, message, err := con.connection.ReadMessage()
			if err != nil {
				log.Println("Read error: ", err)
			}

			var txRes TxResult
			json.Unmarshal([]byte(message), &txRes)

			var requesterAddr, event string
			txRes.convert(&requesterAddr, &event)

			if event == "RequestQuote" {
				startJob()
			}
		}
	}()

	for {
		select {
		case <-done:
			return
		case <-interrupt:
			log.Println("Interrupting")
			err := con.connection.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, ""))
			con.open = false
			if err != nil {
				log.Println("Close error:", err)
				return
			}
			return
		}
	}
}
