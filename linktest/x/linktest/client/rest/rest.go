package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers linktest-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/linktest/quotes/{id}", getQuoteHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/linktest/quotes", listQuoteHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/linktest/quotes", createQuoteHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/linktest/quotes/{id}", updateQuoteHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/linktest/quotes/{id}", deleteQuoteHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/linktest/quotes/request", requestQuoteHandler(clientCtx)).Methods("POST")

}
