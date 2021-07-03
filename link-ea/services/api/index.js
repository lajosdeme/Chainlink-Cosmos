const axios = require('axios')
const {MsgDelegate} = require("@cosmjs/stargate/build/codec/cosmos/staking/v1beta1/tx")

const prefix = 'cosmos'
const chainId = 'linktest'

class LinkAPI {
    constructor(opts) {
        let nodes = opts.nodes

        if (!nodes || !nodes.length) {
            throw Error('Invalid nodes array.')
        }

        this.rest = opts.rest

        //Handle post requests
        //TODO add all other http methods
        async function handlePost(endpoint, jsonString) {
            let result
            
            await axios.post(endpoint, jsonString)
            .then(async res => {
                console.log("RES RECEIVED: ", res)
                result = res
            })
            .catch(err => {
                result = err
            })
            return result
        }


        this.main = {
            //Create a quote
            //TODO add all other API endpoints
            createQuote: async (oracle, requester, quote) => {
                const endpoint = `${this.rest}/linktest/quotes`
                const jsonString = JSON.stringify({
                    base_req: {
                        chain_id: chainId,
                        from: oracle
                    },
                    creator: oracle,
                    oracle: oracle,
                    requester: requester,
                    quote: quote
                })
                console.log("ENDPINT: ", endpoint)
                const result = await handlePost(endpoint, jsonString)
                return result
            }
        }
    }
}
module.exports = LinkAPI