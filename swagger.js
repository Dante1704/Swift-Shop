const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path')

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            tittle: "Mssql + Node.JS + Express",
            version: "3.0.0"
        },
        // servers: [{ url: "localhost:4000" }],
    },
    apis: [`${path.join(__dirname, 'src/routes/*.js')}`],
};


const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;