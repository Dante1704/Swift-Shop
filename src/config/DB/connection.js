const sql = require('mssql');
const { connectionError } = require('../../utils/errors')

class Connection {
    constructor(config) {
        this.config = config;
        this.pool = null;
    }

    async connect() {
        try {
            this.pool = await sql.connect(this.config);
            return this.pool
        } catch (error) {
            throw new connectionError(`Connection Error`, 404)
        }
    }

}

module.exports = Connection;

