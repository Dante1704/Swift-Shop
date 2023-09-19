const { catchedAsync } = require("../utils")

module.exports = {
    getList: catchedAsync(require("./getList")),
    getById: catchedAsync(require('./getById')),
    createObject: catchedAsync(require('./createObject')),
    deleteObject: catchedAsync(require('./deleteObject')),
    getTotal: catchedAsync(require('./getTotal'))
}