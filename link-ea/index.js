const { Requester, Validator } = require('@chainlink/external-adapter')

// Define custom error scenarios for the API.
// Return true for the adapter to retry.
const customError = (data) => {
    if (data.Response === 'Error') return true
    return false
}

const customParams = {
    endpoint: false,
    requester: false
}

const createRequest = (input, callback) => {
    const validator = new Validator(input, customParams)
    const jobRunID = validator.validated.id
    const endpoint = validator.validated.data.endpoint || 'random'
    const url = `https://zenquotes.io/api/${endpoint}`

    const config = {
        url
    }

    Requester.request(config, customError)
    .then(res => {
        callback(res.status, Requester.success(jobRunID, res))
    })
}


// This is a wrapper to allow the function to work with
// GCP Functions
exports.gcpservice = (req, res) => {
    createRequest(req.body, (statusCode, data) => {
      res.status(statusCode).send(data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // AWS Lambda
  exports.handler = (event, context, callback) => {
    createRequest(event, (statusCode, data) => {
      callback(null, data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // newer AWS Lambda implementations
  exports.handlerv2 = (event, context, callback) => {
    createRequest(JSON.parse(event.body), (statusCode, data) => {
      callback(null, {
        statusCode: statusCode,
        body: JSON.stringify(data),
        isBase64Encoded: false
      })
    })
  }
  
  // This allows the function to be exported for testing
  // or for running in express
  module.exports.createRequest = createRequest
