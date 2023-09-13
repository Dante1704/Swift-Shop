module.exports = (model) => {
    const keyConstant = {
        products: ["name", "category", "stock", "price", "image"],
        shops: ["name", "location", "address"]
    }
    return keyConstant[model]
}