const { getKeysTypeMax, checkValues } = require("../helpers")
const compareArrays = require("../helpers/compareArrays")

//Middlware - Check id
module.exports = (req, res, next) => {
    const { id } = req.params

    if (typeof id !== 'string' || id === "") { return res.status(404).send('Error falta id') }

    req.params

    next()
}