package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/lajosdeme/linktest/x/linktest/types"
)

func CmdCreateQuote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-quote [requester] [oracle] [text]",
		Short: "Creates a new quote",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsRequester := string(args[0])
			argsOracle := string(args[1])
			argsText := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateQuote(clientCtx.GetFromAddress().String(), string(argsRequester), string(argsOracle), string(argsText))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateQuote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-quote [id] [requester] [oracle] [text]",
		Short: "Update a quote",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsRequester := string(args[1])
			argsOracle := string(args[2])
			argsText := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateQuote(clientCtx.GetFromAddress().String(), id, string(argsRequester), string(argsOracle), string(argsText))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteQuote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-quote [id] [requester] [oracle] [text]",
		Short: "Delete a quote by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteQuote(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdRequestQuote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "request-quote [oracle]",
		Short: "Request a quote from an oracle.",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			oracleAddr := args[0]
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			msg := types.NewMsgRequestQuote(clientCtx.GetFromAddress().String(), oracleAddr)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}
	flags.AddTxFlagsToCmd(cmd)
	return cmd
}
