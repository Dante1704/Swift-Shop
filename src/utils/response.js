module.exports = (res, code, data) => {
    res.status(code).send(data)
}