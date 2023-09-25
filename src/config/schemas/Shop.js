const { queryError } = require('../../utils/errors')
class Shop {
    constructor({ id, name, location, address, pool }) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.address = address;
        this.pool = pool;
    }

    async create() {
        try {
            const result = await this.pool.request()
                .input('id', this.id)
                .input('name', this.name)
                .input('location', this.location)
                .input('address', this.address)
                .query(
                    `INSERT INTO SHOP(id, name, location, address)
              VALUES (@id , @name , @location, @address)`
                );
            return result
        } catch (err) { throw new queryError(`Error when try create an object, create()`, 409) }
    }

    async getAll() {
        try {
            const result = await this.pool.request().query(`SELECT * FROM SHOP`)
            return result.recordset
        } catch (err) { throw new queryError('Error when try getAll()', 409) }
    }

    async getTotal() {
        try {
            const result = await this.pool.request().query(`SELECT COUNT(id) AS total_id FROM SHOP`)
            return result.recordset[0].total_id
        } catch (err) { throw queryError('Error al obtener el total, getTotal()', 409) }
    }


    async getById() {
        try {
            const result = await this.pool.request()
                .input('id', this.id)
                .query('SELECT * FROM SHOP WHERE id = @id')
            return result
        } catch (err) { throw new queryError('Error when try getById()', 409) }
    }
}

module.exports = Shop;