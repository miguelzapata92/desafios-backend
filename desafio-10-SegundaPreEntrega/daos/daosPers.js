const PERS = 'fs'

let productDao
let cartDao

switch (PERS) {
    /* case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./productos/ProductosDaoFirebase.js')
        const { default: CarritosDaoFirebase } = await import('./carritos/CarritosDaoFirebase.js')

        productosDao = new ProductosDaoFirebase()
        carritosDao = new CarritosDaoFirebase()
        break
    case 'mongodb':
        const { default: ProductosDaoMongoDb } = await import('./productos/ProductosDaoMongoDb.js')
        const { default: CarritosDaoMongoDb } = await import('./carritos/CarritosDaoMongoDb.js')

        productosDao = new ProductosDaoMongoDb()
        carritosDao = new CarritosDaoMongoDb()
        break */

    case 'fs':
        const { default: productDaoFs } = await import('./products/productDaoFs.js')
        const { default: cartDaoFs } = await import('./carts/cartDaoFs.js')

        productDao = new productDaoFs()
        cartDao = new cartDaoFs()
        break
}

export { productDao, cartDao }