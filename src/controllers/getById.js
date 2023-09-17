const Connection = require('../config/DB/connection')
const Shop = require('../config/schemas/Shop')
const Product = require('../config/schemas/Product')
const { entity } = require('../helpers')
const config = require('../config/DB/config')

const db = new Connection(config)

module.exports = async (req, res) => {
    let { model, id } = req.params
    const name = entity(model)
    const pool = await db.connect()

    if (name === "PRODUCT") {
        const instance = new Product({
            id,
            name: null,
            category: null,
            stock: null,
            price: null,
            pool
        })
        const result = await instance.getById()
        if (result.recordset[0] !== undefined) { return res.status(200).send(result.recordset[0]) }
        return res.status(200).send("no se encontro")
    }

    if (name === "SHOP") {
        const instance = new Shop({
            id,
            name: null,
            location: null,
            address: null,
            pool
        })
        const result = await instance.getById()
        if (result.recordset[0] !== undefined) { return res.status(200).send(result.recordset[0]) }
        return res.status(200).send("no se encontro")
    }
    return res.status(400).send('ha habido un error')
}


