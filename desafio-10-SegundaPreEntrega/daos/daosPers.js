let productDao;

const { default: ProductDaoMongoDb } = await import('./products/productDaoMongo.js');
productDao = new ProductDaoMongoDb();

export { productDao }