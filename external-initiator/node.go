package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
)

const (
	externalInitiatorAccessKeyHeader = "X-Chainlink-EA-AccessKey"
	externalInitiatorSecretHeader    = "X-Chainlink-EA-Secret"
)

// Node encapsulates all the configuration
// necessary to interact with a Chainlink node.
type Node struct {
	AccessKey    string
	AccessSecret string
	Endpoint     url.URL
}

func (cl Node) Trigger(jobId string) error {

	u := cl.Endpoint
	u.Path = fmt.Sprintf("v2/specs/%s/runs", jobId)
	request, err := http.NewRequest(http.MethodPost, u.String(), bytes.NewReader([]byte{}))
	if err != nil {
		return err
	}

	request.Header.Add(externalInitiatorAccessKeyHeader, cl.AccessKey)
	request.Header.Add(externalInitiatorSecretHeader, cl.AccessSecret)
	res, err := http.DefaultClient.Do(request)
	if err != nil {
		return err
	}
	data, _ := ioutil.ReadAll(res.Body)
	res.Body.Close()
	fmt.Printf("BODY: %s \n", data)
	return nil
}
