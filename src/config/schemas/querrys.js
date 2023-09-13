module.exports = {
    getProducts: 'SELECT * FROM PRODUCT'
}
// query para obtener todos los productos que se relacionan con la tabla intermedia y tienen la condicion de que son del shop 102
// select * from product
// inner join product_shop on product.id = product_shop.product_id
// where product_shop.shop_id = 102;