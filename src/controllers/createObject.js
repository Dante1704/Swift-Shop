const Connection = require('../config/DB/connection')
const Shop = require('../config/schemas/schemaShop')
const Product = require('../config/schemas/schemaProduct')
const { v4: uuidv4 } = require('uuid');
const { entity } = require('../helpers');
const config = require('../config/DB/config');

const db = new Connection(config)

module.exports = async (req, res) => {
    let { model } = req.params
    const form = req.body
    const name = entity(model)

    const pool = await db.connect()

    if (name === "SHOP") {
        const instance = new Shop({ id: null, name: null, location: null, address: null, pool: pool })
        const result = await instance.getAll()
        const id = result.recordset.length + 101
        const instanceCreate = new Shop({ ...form, id, pool })
        const resultCreate = await instanceCreate.create()
        if (resultCreate.rowsAffected[0] >= 1) {
            return res.status(200).send(`It has been successfully created`)
        }
    }

    if (name === "PRODUCT") {
        const id = uuidv4();
        const instance = new Product({ ...form, id, pool })
        const result = await instance.create()
        if (result.rowsAffected[0] >= 1) {
            return res.status(200).send(`It has been successfully created`)
        }
        return res.status(400).send('Error while creating')
    }

    return res.status(400).send('Error while creating')
}
