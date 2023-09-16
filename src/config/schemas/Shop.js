
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
        } catch (error) {
            throw new creatingError(`Error while creating`, 404)
        }
    } s

    async getAll() {
        try {
            const result = await this.pool.request().query(`SELECT * FROM SHOP`)
            return result
        } catch (error) {
            console.log('error schema shop', error)
            return error
        }
    }

    async getLength() {
        try {
            const result = await this.pool.request().query(`SELECT COUNT(*) AS total_id FROM PRODUCT`)
            return result
        } catch (error) {
            console.log('error schema shop', error)
            return error
        }
    }


    async getById() {
        try {
            const result = await this.pool.request()
                .input('id', this.id)
                .query('SELECT * FROM SHOP WHERE id = @id')
            return result
        } catch (error) {
            console.log('error schmeas shop')
            return error
        }
    }
}

module.exports = Shop;