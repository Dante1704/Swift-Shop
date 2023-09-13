const express = require('express')
const server = express()


server.use(express.json())

server.use(require('./routes'))


server.use((req, res) => {
    res.status(404).send("Bad Request")
})


module.exports = server