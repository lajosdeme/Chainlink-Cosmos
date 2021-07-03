package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/lajosdeme/linktest/x/linktest/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) QuoteAll(c context.Context, req *types.QueryAllQuoteRequest) (*types.QueryAllQuoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var quotes []*types.Quote
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	quoteStore := prefix.NewStore(store, types.KeyPrefix(types.QuoteKey))

	pageRes, err := query.Paginate(quoteStore, req.Pagination, func(key []byte, value []byte) error {
		var quote types.Quote
		if err := k.cdc.UnmarshalBinaryBare(value, &quote); err != nil {
			return err
		}

		quotes = append(quotes, &quote)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllQuoteResponse{Quote: quotes, Pagination: pageRes}, nil
}

func (k Keeper) Quote(c context.Context, req *types.QueryGetQuoteRequest) (*types.QueryGetQuoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var quote types.Quote
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasQuote(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QuoteKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetQuoteIDBytes(req.Id)), &quote)

	return &types.QueryGetQuoteResponse{Quote: &quote}, nil
}
