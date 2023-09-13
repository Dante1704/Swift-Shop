const { clientError } = require("../utils/errors")

module.exports = (form) => {
    const props = []

    for (let prop in form) {
        if (form[prop] === null || form[prop].length === 0) props.push(prop)
    }

    const string = props.join(", ")

    if (props.length) { throw new clientError(`Missing value on props: ${string}`, 401) }
    return
} 