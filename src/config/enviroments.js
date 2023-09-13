require("dotenv").config({ path: "././.env" })
const { stringToArray } = require("../helpers")

module.exports = {
    ENTITIES: stringToArray(process.env.ENTITIES)
}   