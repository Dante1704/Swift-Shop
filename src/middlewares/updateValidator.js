const { getKeysTypeMax, checkValues } = require("../helpers")
const compareKeys = require("../helpers/compareKeys")

//Middlware - Check correct: keys and Values-nulls 
module.exports = (req, res, next) => {
    const { model } = req.params
    const { body } = req

    const bodyKeys = Object.keys(body)

    const templateObject = getKeysTypeMax(model)
    const keys = Object.keys(templateObject)

    //compara que las keys del post sean === que las del objeto templateObject, tambien de que tenga id en db
    compareKeys(keys, bodyKeys)

    //checkea que no haya nullos, los tipos de datos y el largo cuando es un varchar. La db en mysql, varchar(255)
    checkValues(templateObject, body)

    req.body


    next()
}