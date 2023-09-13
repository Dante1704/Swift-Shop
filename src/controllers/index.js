const { catchedAsync } = require("../utils")

module.exports = {
    getList: catchedAsync(require("./getList"))
}