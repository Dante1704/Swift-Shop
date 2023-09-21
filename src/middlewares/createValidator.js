const { getKeysTypeMax, checkValues } = require("../helpers")
const compareKeys = require("../helpers/compareKeys")

//Middlware - Check correct: keys and Values-nulls 
module.exports = (req, res, next) => {
    const { model } = req.params
    const { body } = req

    const bodyKeys = Object.keys(body)

    //traigo el template que continene la info de las keyvalues y quito el id.
    const { id, ...templateObject } = getKeysTypeMax(model)
    const templateKeys = Object.keys(templateObject)

    //compara que las keys del body sean === que las del objeto templateObject en db
    compareKeys(templateKeys, bodyKeys)

    //checkea que no haya nullos, los tipos de datos y el largo cuando es un varchar. La db en mysql, varchar(255)
    checkValues(templateObject, body)

    req.body


    next()
}