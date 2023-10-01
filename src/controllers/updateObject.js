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
    const { id, name, category, stock, price, shops, image } = req.body
    const entity2 = entity(model)
    console.log(id)
    console.log(name)
    console.log(category)
    console.log(stock)
    console.log(price)
    console.log(shops)

    const pool = await db.connect()

    if (entity2 === "SHOP") {
        const instanceUpdate = new Shop({ id, name, location, address, pool })
        const resultUpdate = await instanceUpdate.update()
        if (resultUpdate.rowsAffected[0] >= 1) {
            response(res, 201, `It has been successfully updated`)
        }
    }

    if (entity2 === "PRODUCT") {
        const instance = new Product({ id, name, category, stock, price, image, pool })
        const result = await instance.update()

        if (result.rowsAffected[0] >= 1) {
            const arrShops = shops.split(',').map((shop_id) => Number(shop_id))


            const instanceUpdatePromises = arrShops.map((shop_id) => {
                const instance = new Product_shop({ product_id: id, shop_id: shop_id.toString(), pool })
                return instance.update //regreso promesas sin ejecutar () 
            });

            await Promise.all(instanceUpdatePromises)

            response(res, 201, `It has been successfully updated`)
        }
        return res.status(400).send('Error while creating')
    }
}
