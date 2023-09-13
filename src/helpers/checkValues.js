
const { clientError } = require("../utils/errors")

module.exports = (original, form) => {
    for (let prop in original) {
        const validators = original[prop]
        //Si es = 2 es porque es un varchar y tiene un max de 255 caracteres para guardar. Entero es mucho mayor.
        if (validators.length === 2) {
            if (form[prop].length > validators[1]) { throw new clientError(`El valor de ${prop} tiene que ser menor que ${validators[1]}`, 400) }
        }

    }
    return
} 