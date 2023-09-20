const { getKeysTypeMax, checkValues } = require("../helpers")
const compareKeys = require("../helpers/compareKeys")

//Middlware - Check correct: keys and Values-nulls 
module.exports = (req, res, next) => {
    const { model } = req.params
    const { body } = req

    const bodyKeys = Object.keys(body)

    const templateObject = getKeysTypeMax(model)
    const keys = Object.keys(templateObject)

    //compara que las keys del post sean === que las del objeto templateObject en db
    compareKeys(keys, bodyKeys)

    //checkea valores en sus props, mayores.
    checkValues(templateObject, body)

    req.body


    next()
}