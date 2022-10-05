let productDao;

const { default: ProductDaoMongoDb } = await import('../models/product.js');
productDao = new ProductDaoMongoDb();

export { productDao }