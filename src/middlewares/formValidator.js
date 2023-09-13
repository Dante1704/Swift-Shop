const { getKeysTypeMax, checkValues } = require("../helpers")
const compareArrays = require("../helpers/compareArrays")

//Middlware - Check correct: keys and nulls on form
module.exports = (req, res, next) => {
    const { model } = req.params
    const form = req.body

    const original = getKeysTypeMax(model)
    const keys = Object.keys(original)
    const formkeys = Object.keys(form)

    //compara que las keys del post sean las mismas que las del objeto original en db
    compareArrays(keys, formkeys)

    checkValues(original, form)


    req.form

    next()
}