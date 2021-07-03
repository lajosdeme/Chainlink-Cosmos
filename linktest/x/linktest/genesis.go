package linktest

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lajosdeme/linktest/x/linktest/keeper"
	"github.com/lajosdeme/linktest/x/linktest/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the quote
	for _, elem := range genState.QuoteList {
		k.SetQuote(ctx, *elem)
	}

	// Set quote count
	k.SetQuoteCount(ctx, uint64(len(genState.QuoteList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all quote
	quoteList := k.GetAllQuote(ctx)
	for _, elem := range quoteList {
		elem := elem
		genesis.QuoteList = append(genesis.QuoteList, &elem)
	}

	return genesis
}
