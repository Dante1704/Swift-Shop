const sql = require('mssql');

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
            console.error('Error al conectar a SQL Server:', error);
        }
    }

    async disconnect() {
        try {
            await this.pool.close();
            console.log('Conexión a SQL Server cerrada');
        } catch (error) {
            console.error('Error al cerrar la conexión a SQL Server:', error);
        }
    }
}

module.exports = Connection;



// connection - async function

// const config = require('./config')

// async function getConnection() {
//     try {
//         const pool = await sql.connect(config)
//         return pool
//     } catch (error) {
//         console.log('error al intentar conectar :', error)
//     }
// }

// module.exports = { getConnection };

