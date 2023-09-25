const { clientError } = require("../utils/errors")

module.exports = (original, form) => {

    for (let prop in original) {
        const validators = original[prop]

        //checkea nulls
        if (form[prop] === null || form[prop] === "") { throw new clientError(`La propiedad: ${prop} esta null`, 400) }

        // compara el largo que recibe con el largo permitido que se definio en tablas.
        if (validators[0] === 'string') {
            if (form[prop].length > validators[1]) { throw new clientError(`El valor de ${prop} tiene que ser menor que ${validators[1]}`, 400) }
        }
    }
    return
} 