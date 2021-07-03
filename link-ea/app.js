const express = require('express')
const createRequest  = require('./index').createRequest
const app = express()
const port = process.env.PORT || 3000

const api = require('./services/api')
require('dotenv').config()

app.post('/', async (req, res) => {
    console.log("POST DATA: ", req)
    createRequest(req.body, async (status, result) => {
        console.log("Quote: ", result.data[0].q)
        console.log("Author: ", result.data[0].a)

        api.main.createQuote(process.env.ORACLE_ADDRESS, process.env.ORACLE_ADDRESS, result.data[0].q).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

        res.status(status).json(result)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))