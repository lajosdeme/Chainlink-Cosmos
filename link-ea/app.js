const express = require('express')
const { json, request } = require('express')
const app = express()
const port = process.env.PORT || 3000
const createRequest = require('./index').createRequest
const api = require('./services/api').API
require('dotenv').config()

app.use(json())
app.post('/', async (req, res) => {
    createRequest(req.body, async (status, result) => {

        if (status == 200) {
            const quote = result.data[0].q
            const author = result.data[0].a
            const text = `${quote} - ${author}`

            const requester = req.body.data.requester
            api.main.signAndBroadcast(process.env.ORACLE_ADDRESS, requester, text)
        }

        res.status(status).json(result)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))