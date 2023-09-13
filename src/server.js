const express = require('express')
const server = express()


server.use(express.json())

server.use(require('./routes'))

server.use((err, req, res, next) => {
    if (err.name === "clientError" || err.name === "modelError") {
        return res.status(401).send({
            error: true,
            errorName: err.name,
            message: err.message
        })
    }
    res.status(404).send("Bad Request")
})

module.exports = server