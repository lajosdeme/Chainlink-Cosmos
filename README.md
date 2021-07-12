# Chainlink-Cosmos
Example project demonstrating how to connect a [Chainlink](https://chain.link/) oracle to a [Cosmos](https://cosmos.network/) blockchain.

This repository is the companion to my [Medium article](https://betterprogramming.pub/connect-a-chainlink-oracle-to-a-cosmos-blockchain-d7934d75bae5) where I explain the whole process in detail.

## How it works
I used [Starport](https://cosmos.network/starport/) to set up a minimal Cosmos blockchain that has the ability to store random quotes from users. 
I built a [Chainlink external initiator](https://docs.chain.link/docs/external-initiators-introduction/) that is basically a WebSocket client that subscribes to transaction events coming from a [Tendermint node](https://tendermint.com/core/) in the underlying blockchain.   
When it logs a transaction that indicates that a user requested a random quote, it triggers a [Chainlink external adapter](https://docs.chain.link/docs/external-adapters/), which queries an off-chain API to get the random quote, then creates a transaction with the quote on the blockchain.  
You should really read the Medium article for an in-depth explanation.  
## Structure
This repository contains three subrepositories:
- [linktest](https://github.com/lajosdeme/Chainlink-Cosmos/tree/main/linktest): The Cosmos blockchain written in Go.
- [external-initiator](https://github.com/lajosdeme/Chainlink-Cosmos/tree/main/external-initiator): The Chainlink external initiator written in Go.
- [link-ea](https://github.com/lajosdeme/Chainlink-Cosmos/tree/main/link-ea): The Chainlink external adapter written in JavaScript.
