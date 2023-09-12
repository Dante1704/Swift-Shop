const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (req, res) =>{
    res.status(200).send("It Works")
})

server.use((req, res) => {
    res.status(404).send("Bad Request")
})

module.exports = server