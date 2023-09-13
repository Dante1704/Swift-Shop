const Connection = require('../config/DB/connection')
const config = require('../config/DB/config')
const db = new Connection(config)
const { v4: uuidv4 } = require('uuid');
const { entity } = require('../helpers')


module.exports = async (req, res) => {
    let { model } = req.params
    const name = entity(model)
    const form = req.body

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
        const values = ({ ...form, id })
        const result = await pool.request()
            .input('id', values.id)
            .input('name', values.name)
            .input('category', values.category)
            .input('stock', values.stock)
            .input('price', values.price)
            .input('image', values.image)
            .query(
                `INSERT INTO PRODUCT(id, name, category, stock, price, image)
                VALUES (@id , @name , @category, @stock, @price, @image)`
            )
        return res.status(200).send(result)
    }

    return res.status(400).send('Ha ocurrido un error al crear')
}
