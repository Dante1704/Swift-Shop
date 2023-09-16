
class Product {
    constructor({ id, name, location, address, pool }) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.address = address;
        this.pool = pool;
    }

    async create() {
        try {
            console.log(this)
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
    }

}

module.exports = Product;