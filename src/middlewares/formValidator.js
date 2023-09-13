const { clientError } = require("../utils/errors")
const { getKeys, checkNulls } = require("../helpers")

//Middlware - Check correct: keys and nulls on form
module.exports = (req, res, next) => {
    const { model } = req.params
    const form = req.body

    const keys = getKeys(model)
    const formkeys = Object.keys(form)

    const stringKeys = keys.join(", ")

    // check keys from getKeys(model) and receive form 
    if (keys.length !== formkeys.length) { throw new clientError(`Error keys on form, check required keys: ${stringKeys}`, 400) }

    // check includes all keys from form
    for (let i = 0; i < formkeys.length; i++) {
        if (!(keys.includes(formkeys[i]))) { throw new clientError(`Error keys on form, check required keys: ${stringKeys}`, 400) }
    }

    const checkObjectToCreate = {
        shop: checkNulls(form),
        product: checkNulls(form)
    }

    //check nulls on values of keys 
    checkObjectToCreate[model]

    req.form

    next()
}