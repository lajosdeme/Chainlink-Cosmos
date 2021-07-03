const {DirectSecp256k1HdWallet} = require('@cosmjs/proto-signing')
const {assertIsBroadcastTxSuccess} = require('@cosmjs/stargate')

const {MsgCreateQuote} = require('../cosmos/tx')
const { txClient } = require('../cosmos/client')

require('dotenv').config()

class LinkAPI {
    constructor() {
        this.main = {
            //Create, sign and broadcast a quote tx
            signAndBroadcast: async (oracle, requester, quote) => {
                const wallet = await DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC);
                const client = await txClient(wallet)

                const msg = MsgCreateQuote.fromJSON({
                    creator: oracle,
                    requester: requester,
                    oracle: oracle,
                    text: quote
                })
                const msgAny = client.msgCreateQuote(msg)
                const result = await client.signAndBroadcast([msgAny])
                console.log("Result: ", result)
            }
        }
    }
}
module.exports = LinkAPI