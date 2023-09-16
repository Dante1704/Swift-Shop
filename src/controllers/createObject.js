const Connection = require('../config/DB/connection')

const config = require('../config/DB/config')
const db = new Connection(config)
const { v4: uuidv4 } = require('uuid');
const { entity } = require('../helpers');
const Product = require('../config/schemas/schemaProducts')

module.exports = async (req, res) => {
    let { model } = req.params
    const form = req.body
    const name = entity(model)

    const pool = await db.connect()

    if (name === "SHOP") {
        const { recordset } = await pool.request().query('SELECT COUNT(id) FROM SHOP')
        const values = ({ ...form, id: recordset[0][''] + 101 })
        const result = await pool.request()
            .input('id', values.id)
            .input('name', values.name)
            .input('location', values.location)
            .input('address', values.address)
            .query(
                `INSERT INTO SHOP(id, name, location, address)
                VALUES (@id , @name , @location, @address)`
            )
        return res.status(200).send(result)
    }

    if (name === "PRODUCT") {
        const id = uuidv4();
        const values = ({ ...form, id, pool })
        const result = await new Product(values).create()
        if (result.rowsAffected[0] >= 1) {
            return res.status(200).send(`It has been successfully created`)
        }
        return res.status(400).send('Error while creating')
    }

    return res.status(400).send('Error while creating')
}
