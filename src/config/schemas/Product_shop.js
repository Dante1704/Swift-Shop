
class Product_shop {
    constructor({ product_id, shop_id, pool }) {
        this.product_id = product_id;
        this.shop_id = shop_id;
        this.pool = pool;
    }

    async create() {
        try {
            // console.log(typeof this.product_id)
            // console.log(typeof this.shop_id)
            const result = await this.pool.request()
                .input('product_id', this.product_id)
                .input('shop_id', this.shop_id)
                .query(
                    `INSERT INTO PRODUCT_SHOP(product_id, shop_id, )
              VALUES (@product_id , @shop_id )`
                );
            console.log(result.rowsAffected[1])
            return result
        } catch (error) {
            throw new creatingError(`Error while creating`, 404)
        }
    }
}

module.exports = Product_shop;