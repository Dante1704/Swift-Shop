module.exports = (model) => {
    const keysTypesMax = {
        products: {
            id: ['string', 255],
            name: ['string', 25],
            category: ['string', 20],
            stock: ['int'],
            price: ['int'],
            image: ['string', 255],
            shops: ['string', 255]
        },
        shops: {
            id: ['int'],
            name: ['string', 25],
            location: ['string', 20],
            address: ['string', 255]
        }
    }
    return keysTypesMax[model]
}