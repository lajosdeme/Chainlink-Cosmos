package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lajosdeme/linktest/x/linktest/types"
	"strconv"
)

// GetQuoteCount get the total number of quote
func (k Keeper) GetQuoteCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteCountKey))
	byteKey := types.KeyPrefix(types.QuoteCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetQuoteCount set the total number of quote
func (k Keeper) SetQuoteCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteCountKey))
	byteKey := types.KeyPrefix(types.QuoteCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendQuote appends a quote in the store with a new id and update the count
func (k Keeper) AppendQuote(
	ctx sdk.Context,
	creator string,
	requester string,
	oracle string,
	text string,
) uint64 {
	// Create the quote
	count := k.GetQuoteCount(ctx)
	var quote = types.Quote{
		Creator:   creator,
		Id:        count,
		Requester: requester,
		Oracle:    oracle,
		Text:      text,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteKey))
	value := k.cdc.MustMarshalBinaryBare(&quote)
	store.Set(GetQuoteIDBytes(quote.Id), value)

	// Update quote count
	k.SetQuoteCount(ctx, count+1)

	return count
}

// SetQuote set a specific quote in the store
func (k Keeper) SetQuote(ctx sdk.Context, quote types.Quote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteKey))
	b := k.cdc.MustMarshalBinaryBare(&quote)
	store.Set(GetQuoteIDBytes(quote.Id), b)
}

// GetQuote returns a quote from its id
func (k Keeper) GetQuote(ctx sdk.Context, id uint64) types.Quote {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteKey))
	var quote types.Quote
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetQuoteIDBytes(id)), &quote)
	return quote
}

// HasQuote checks if the quote exists in the store
func (k Keeper) HasQuote(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteKey))
	return store.Has(GetQuoteIDBytes(id))
}

// GetQuoteOwner returns the creator of the quote
func (k Keeper) GetQuoteOwner(ctx sdk.Context, id uint64) string {
	return k.GetQuote(ctx, id).Creator
}

// RemoveQuote removes a quote from the store
func (k Keeper) RemoveQuote(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteKey))
	store.Delete(GetQuoteIDBytes(id))
}

// GetAllQuote returns all quote
func (k Keeper) GetAllQuote(ctx sdk.Context) (list []types.Quote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Quote
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetQuoteIDBytes returns the byte representation of the ID
func GetQuoteIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetQuoteIDFromBytes returns ID in uint64 format from a byte array
func GetQuoteIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
