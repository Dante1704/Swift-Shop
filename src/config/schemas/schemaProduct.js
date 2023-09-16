const creatingError = require('../../utils/errors/index')

class Product {
    constructor({ id, name, category, stock, price, image, pool }) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.stock = stock;
        this.price = price;
        this.image = image;
        this.pool = pool;
    }

    async create() {
        try {
            const result = await this.pool.request()
                .input('id', this.id)
                .input('name', this.name)
                .input('category', this.category)
                .input('stock', this.stock)
                .input('price', this.price)
                .input('image', this.image)
                .query(
                    `INSERT INTO PRODUCT(id, name, category, stock, price, image)
                    VALUES (@id , @name , @category, @stock, @price, @image)`
                );
            console.log('result', result)
            return result
        } catch (error) {
            throw new creatingError(`Error while creating`, 404)
        }
    }

    async getAll() {
        try {
            const result = await this.pool.request().query(`SELECT * FROM PRODUCT`)
            return result
        } catch (error) {
            console.log('error schema products', error)
            return error
        }
    }
}

module.exports = Product;