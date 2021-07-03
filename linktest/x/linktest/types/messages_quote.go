package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateQuote{}

func NewMsgCreateQuote(creator string, requester string, oracle string, text string) *MsgCreateQuote {
	return &MsgCreateQuote{
		Creator:   creator,
		Requester: requester,
		Oracle:    oracle,
		Text:      text,
	}
}

func (msg *MsgCreateQuote) Route() string {
	return RouterKey
}

func (msg *MsgCreateQuote) Type() string {
	return "CreateQuote"
}

func (msg *MsgCreateQuote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateQuote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateQuote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateQuote{}

func NewMsgUpdateQuote(creator string, id uint64, requester string, oracle string, text string) *MsgUpdateQuote {
	return &MsgUpdateQuote{
		Id:        id,
		Creator:   creator,
		Requester: requester,
		Oracle:    oracle,
		Text:      text,
	}
}

func (msg *MsgUpdateQuote) Route() string {
	return RouterKey
}

func (msg *MsgUpdateQuote) Type() string {
	return "UpdateQuote"
}

func (msg *MsgUpdateQuote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateQuote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateQuote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateQuote{}

func NewMsgDeleteQuote(creator string, id uint64) *MsgDeleteQuote {
	return &MsgDeleteQuote{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteQuote) Route() string {
	return RouterKey
}

func (msg *MsgDeleteQuote) Type() string {
	return "DeleteQuote"
}

func (msg *MsgDeleteQuote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteQuote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteQuote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgRequestQuote{}

func NewMsgRequestQuote(creator string, oracle string) *MsgRequestQuote {
	return &MsgRequestQuote{
		Creator:   creator,
		Requester: creator,
		Oracle:    oracle,
	}
}
func (msg *MsgRequestQuote) Route() string {
	return RouterKey
}

func (msg *MsgRequestQuote) Type() string {
	return "RequestQuote"
}

func (msg *MsgRequestQuote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRequestQuote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRequestQuote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err2 := sdk.AccAddressFromBech32(msg.Oracle)
	if err2 != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid oracle address (%s)", err)
	}

	return nil
}
