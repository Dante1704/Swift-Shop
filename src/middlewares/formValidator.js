const { getKeysTypeMax, checkValues } = require("../helpers")
const compareArrays = require("../helpers/compareArrays")

//Middlware - Check correct: keys and Values-nulls 
module.exports = (req, res, next) => {
    const { model } = req.params
    const form = req.body

    const original = getKeysTypeMax(model)
    const keys = Object.keys(original)
    const formkeys = Object.keys(form)

    //compara que las keys del post sean === que las del objeto original en db
    compareArrays(keys, formkeys)

    //checkea valores en sus props, mayores.
    checkValues(original, form)

    req.form

    next()
}