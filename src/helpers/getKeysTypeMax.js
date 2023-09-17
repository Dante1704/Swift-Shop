module.exports = (model) => {
    const keysTypesMax = {
        products: {
            name: ['string', 25],
            category: ['string', 20],
            stock: ['int'],
            price: ['int'],
            image: ['string', 255],
            shops: ['string', 255]
        },
        shops: {
            name: ['string', 25],
            location: ['string', 20],
            address: ['string', 255]
        }
    }
    return keysTypesMax[model]
}