package main

import (
	"encoding/base64"
	"fmt"
	"log"
	"strings"
)

//Convert retrieves the transaction hash and event type
func (txRes TxResult) convert(requesterAddr *string, event *string) {
	fmt.Println(requesterAddr, event)
	if result, ok := txRes["result"].(map[string]interface{}); ok {
		if data, ok := result["data"].(map[string]interface{}); ok {
			if tx, ok := data["value"].(map[string]interface{})["TxResult"].(map[string]interface{})["tx"]; ok {
				log.Printf("TX GOT: %s", tx.(string))
				h := tx.(string)

				*requesterAddr = getRequesterAddressFromHash(h)
			}
		}
		if events, ok := result["events"].(map[string]interface{}); ok {
			if msgAction, ok := events["message.action"]; ok {
				e := fmt.Sprint(msgAction.([]interface{})[0])
				*event = e
				log.Printf("EVENT TYPE GOT: %s", *event)
			}
		}
	}
}

//Retrieve the requester address from the base64 hash
func getRequesterAddressFromHash(hash string) string {
	val, err := base64.StdEncoding.DecodeString(hash)

	if err != nil {
		log.Println("Cant decode hash")
		return ""
	}

	results := strings.Split(string(val), "-")
	if len(results) > 1 {
		requesterAddr := results[1]
		return requesterAddr
	}
	return ""
}
