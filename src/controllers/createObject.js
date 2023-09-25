const Connection = require('../config/DB/connection')
const Shop = require('../config/schemas/Shop')
const Product = require('../config/schemas/Product')
const Product_shop = require('../config/schemas/Product_shop');
const { v4: uuidv4 } = require('uuid');
const { entity } = require('../helpers');
const config = require('../config/DB/config');
const response = require('../utils/response');

const db = new Connection(config)

module.exports = async (req, res) => {
    let { model } = req.params
    const { body } = req
    const name = entity(model)

    const pool = await db.connect()

    if (name === "SHOP") {
        const instance = new Shop({ id: null, name: null, location: null, address: null, pool: pool })
        const result = await instance.getTotal()
        const id = result + 101
        const instanceCreate = new Shop({ ...body, id, pool })
        const resultCreate = await instanceCreate.create()
        if (resultCreate.rowsAffected[0] >= 1) {
            response(res, 201, `It has been successfully created`)
        }
    }

    if (name === "PRODUCT") {
        const id = uuidv4();
        const { shops, ...product } = body
        const instance = new Product({ ...product, id, pool })
        const result = await instance.create()

        if (result.rowsAffected[0] >= 1) {
            const arrShops = shops.split(',').map(Number)

            const instanceCreatePromises = arrShops.map((shop_id) => {
                const instance = new Product_shop({ product_id: id, shop_id: shop_id.toString(), pool })
                return instance.create //regreso promesas sin ejecutar 
            });

            await Promise.all(instanceCreatePromises)

            return response(res, 201, `It has been successfully created`)
        }
        return res.status(400).send('Error while creating')
    }
}
