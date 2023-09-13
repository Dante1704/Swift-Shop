const express = require('express')
const server = express()

// connection with class
const Connection = require('./config/DB/connection')
const config = require('./config/DB/config')
const db = new Connection(config)

// conection with function
// const { getConnection } = require('./config/DB/connection')

server.use(express.json())

server.use(require('./routes'))


server.use((req, res) => {
    res.status(404).send("Bad Request")
})


module.exports = server