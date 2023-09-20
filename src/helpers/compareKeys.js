const { clientError } = require("../utils/errors")

module.exports = (array1, array2) => {

    const stringKeys = array1.join(", ")

    // check keys quantity keys
    if (array1.length !== array2.length) { throw new clientError(`Error keys on form, check required keys: ${stringKeys}`, 400) }

    const sortedArray1 = array1.sort()
    const sortedArray2 = array2.sort()

    // compare values of arrays
    for (let i = 0; i < sortedArray1.length; i++) {
        if (sortedArray1[i] !== sortedArray2[i]) {
            throw new clientError(`Error keys on form, check required keys: ${stringKeys}`, 400)
        }
    }

    return
}