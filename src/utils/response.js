module.exports = (res, code, data) => {
    console.log(code)
    console.log(data)
    res.status(code).send(data)
}