const { queryError } = require('../../utils/errors');
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
            console.log(result)
            return result
        } catch (err) { throw new queryError(`Error when try create an object, create()`, 409) }
    }

    async getAll() {
        try {
            const result = await this.pool.request().query(`SELECT * FROM PRODUCT`)
            return result.recordset
        } catch (err) { throw new queryError('Error when try getAll()', 409) }
    }

    async getById() {
        try {
            const result = await this.pool.request()
                .input('id', this.id)
                .query('SELECT * FROM PRODUCT WHERE id = @id')
            return result
        } catch (err) { throw new queryError('Error when try getById()', 409) }
    }

    async delete() {
        try {
            const result = await this.pool.request()
                .input('id', this.id)
                .query('DELETE FROM PRODUCT_SHOP WHERE product_id = @id');

            if (!result) { throw new queryerr('Error eliminando relacion', 409) }

            const result1 = await this.pool.request()
                .input('id', this.id)
                .query('DELETE FROM PRODUCT WHERE id = @id');
            return result1;
        } catch (err) { throw new queryError('Error al eliminar producto, delete()', 409); }
    }

    async getTotal() {
        try {
            const result = await this.pool.request().query(`SELECT COUNT(*) AS total_id FROM PRODUCT`)
            return result
        } catch (err) { throw queryError('Error al obtener el total, getTotal()', 409) }
    }
}
module.exports = Product;