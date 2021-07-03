// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
const { SigningStargateClient } = require("@cosmjs/stargate");
const { Registry } = require("@cosmjs/proto-signing");
const { Api } = require("./rest");
const { MsgUpdateQuote } = require("./tx");
const { MsgDeleteQuote } = require("./tx");
const { MsgRequestQuote } = require("./tx");
const { MsgCreateQuote } = require("./tx");

const types = [
    ["/lajosdeme.linktest.linktest.MsgUpdateQuote", MsgUpdateQuote],
    ["/lajosdeme.linktest.linktest.MsgDeleteQuote", MsgDeleteQuote],
    ["/lajosdeme.linktest.linktest.MsgRequestQuote", MsgRequestQuote],
    ["/lajosdeme.linktest.linktest.MsgCreateQuote", MsgCreateQuote],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs) => client.signAndBroadcast(address, msgs, defaultFee),
        msgUpdateQuote: (data) => ({ typeUrl: "/lajosdeme.linktest.linktest.MsgUpdateQuote", value: data }),
        msgDeleteQuote: (data) => ({ typeUrl: "/lajosdeme.linktest.linktest.MsgDeleteQuote", value: data }),
        msgRequestQuote: (data) => ({ typeUrl: "/lajosdeme.linktest.linktest.MsgRequestQuote", value: data }),
        msgCreateQuote: (data) => ({ typeUrl: "/lajosdeme.linktest.linktest.MsgCreateQuote", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};

module.exports = { txClient, queryClient, };
