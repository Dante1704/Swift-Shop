const Connection = require('../config/DB/connection')
const Shop = require('../config/schemas/Shop')
const Product = require('../config/schemas/Product')
const Product_shop = require('../config/schemas/Product_shop');
const { v4: uuidv4 } = require('uuid');
const { entity, stringToArray } = require('../helpers');
const config = require('../config/DB/config');

const db = new Connection(config)

module.exports = async (req, res) => {
    let { model } = req.params
    const form = req.body
    const name = entity(model)

    const pool = await db.connect()

    if (name === "SHOP") {
        const instance = new Shop({ id: null, name: null, location: null, address: null, pool: pool })
        const result = await instance.getLength()
        const id = result.recordset.total_id + 101
        const instanceCreate = new Shop({ ...form, id, pool })
        const resultCreate = await instanceCreate.create()
        if (resultCreate.rowsAffected[0] >= 1) {
            return res.status(200).send(`It has been successfully created`)
        }
    }

    if (name === "PRODUCT") {
        const id = uuidv4();
        const { shops, ...product } = form
        const instance = new Product({ ...product, id, pool })
        const result = await instance.create()
        if (result.rowsAffected[0] >= 1) {
            const arrShops = shops.split(',').map(shop => parseInt(shop, 10))
            const instanceCreatePromises = await Promise.all(arrShops.map(async (shop_id) => {
                return new Product_shop({ product_id: id, shop_id: shop_id.toString(), pool })
            }));


            for (const instanceCreateRelation of instanceCreatePromises) {
                await instanceCreateRelation.create()
            }

            return res.status(200).send(`It has been successfully created`)
        }
        return res.status(400).send('Error while creating')
    }
}
