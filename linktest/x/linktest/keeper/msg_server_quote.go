package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/lajosdeme/linktest/x/linktest/types"
)

func (k msgServer) CreateQuote(goCtx context.Context, msg *types.MsgCreateQuote) (*types.MsgCreateQuoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendQuote(
		ctx,
		msg.Creator,
		msg.Requester,
		msg.Oracle,
		msg.Text,
	)

	return &types.MsgCreateQuoteResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateQuote(goCtx context.Context, msg *types.MsgUpdateQuote) (*types.MsgUpdateQuoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var quote = types.Quote{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Requester: msg.Requester,
		Oracle:    msg.Oracle,
		Text:      msg.Text,
	}

	// Checks that the element exists
	if !k.HasQuote(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetQuoteOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetQuote(ctx, quote)

	return &types.MsgUpdateQuoteResponse{}, nil
}

func (k msgServer) DeleteQuote(goCtx context.Context, msg *types.MsgDeleteQuote) (*types.MsgDeleteQuoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasQuote(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetQuoteOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveQuote(ctx, msg.Id)

	return &types.MsgDeleteQuoteResponse{}, nil
}

func (k msgServer) RequestQuote(goCtx context.Context, msg *types.MsgRequestQuote) (*types.MsgRequestQuoteResponse, error) {
	return &types.MsgRequestQuoteResponse{}, nil
}
