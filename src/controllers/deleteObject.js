const Connection = require('../config/DB/connection')
const Shop = require('../config/schemas/Shop')
const Product = require('../config/schemas/Product')
const { entity } = require('../helpers')
const config = require('../config/DB/config')
const response = require('../utils/response')

const db = new Connection(config)

module.exports = async (req, res) => {
    let { model, id } = req.params
    const name = entity(model)
    const pool = await db.connect()

    if (name === "PRODUCT") {
        const instance = new Product({ id, name: null, category: null, stock: null, price: null, pool })
        const result = await instance.delete()
        if (result.rowsAffected[0] >= 1) { response(res, 200, `The product  with id: ${id} has been deleted`) }
        return response(res, 404, `The product with id: ${id} doesnt exist in the database`)

    }

    if (name === "SHOP") {
        const instance = new Shop({ id, name: null, location: null, address: null, pool })
        const result = await instance.getById()
        console.log(result)
        if (result.rowsAffected[0] >= 1) { response(res, 200, `The Shop with id: ${id} has been deleted`) }
        return response(res, 404, `The Shop with id: ${id} doesnt exist in the database`)
    }
    return res.status(400).send('ha habido un error')
}


