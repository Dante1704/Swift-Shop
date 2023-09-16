
const { clientError } = require("../utils/errors")

module.exports = (original, form) => {
    for (let prop in original) {
        const validators = original[prop]

        if (validators[0] === 'string') {
            if (form[prop].length > validators[1]) { throw new clientError(`El valor de ${prop} tiene que ser menor que ${validators[1]}`, 400) }
        }
    }
    return
} 