const LinkAPI = require('./api/index')

const API = new LinkAPI({
    nodes: process.env.NODES ? process.env.NODES.split(',') : ['ws://localhost:26657'],
    rest: process.env.REST || 'http://localhost:1317'
})

module.exports = API