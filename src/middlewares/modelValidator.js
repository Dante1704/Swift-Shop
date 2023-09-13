const { modelError } = require("../utils/errors")
const { stringToArray } = require("../helpers")

module.exports = (req, res, next) => {
    const { model } = req.params
    const entities = stringToArray(process.env.ENTITIES)

    if ((entities.includes(model))) {
        return next()
    } else {
        // res.status(404).send('ruta erronea, crear throw error')
        throw new modelError(`Invalid route, please check`, 404)
    }
}