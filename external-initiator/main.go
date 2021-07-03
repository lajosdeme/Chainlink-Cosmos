package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/url"
	"os"
	"strings"

	"github.com/joho/godotenv"
)

//This will hold the transaction result
type TxResult map[string]interface{}

func main() {

	//Construct the ws url
	u := url.URL{
		Scheme: "ws",
		Host:   "localhost:26657",
		Path:   "/websocket",
	}

	WS := WebSocket{
		Endpoint: u.String(),
	}

	c := WS.Connect()

	//Subscription message
	message := `{
		"jsonrpc": "2.0",
		"method": "subscribe",
		"id": 0,
		"params": {
			"query":"tm.event = 'Tx'"
		}
	}`

	c.Subscribe(message)
}

type Payload struct {
	Endpoint  string `json:"endpoint"`
	Requester string `json:"requester"`
}

//Start job starts triggers the job on the oracle node
func startJob(requester string) {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading env.")
	}

	u := url.URL{
		Scheme: "http",
		Host:   os.Getenv("EI_CHAINLINKURL"),
		Path:   fmt.Sprintf("v2/specs/%s/runs", os.Getenv("JOB_ID")),
	}

	cl := Node{
		AccessKey:    os.Getenv("EI_IC_ACCESSKEY"),
		AccessSecret: os.Getenv("EI_IC_SECRET"),
		Endpoint:     u,
	}

	p := Payload{
		Endpoint:  "random",
		Requester: fmt.Sprint(strings.TrimSpace(requester)),
	}

	fmt.Println("PAYLOAD: ", p)
	res, _ := json.Marshal(p)

	error := cl.Trigger(os.Getenv("JOB_ID"), res)

	if error != nil {
		log.Fatal("Error running job: ", error)
	}
	fmt.Println("Job successfully run!")
}
