const express = require('express')
const server = express()
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');

server.use(express.json())

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use(require('./routes'))


server.use((err, req, res, next) => {
    if (err.name === "clientError" || err.name === "modelError" || err.name === "connectionError") {
        return res.status(401).send({
            error: true,
            errorName: err.name,
            message: err.message
        })
    }
    return res.status(404).send(err)
})

module.exports = server