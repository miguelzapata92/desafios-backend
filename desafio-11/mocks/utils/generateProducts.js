const {faker} = require('@faker-js/faker');
faker.locale = 'es'

function generateProduct() {
    data =[]
    for (let index = 0; index < 5; index++) {
        const item = {
            title: faker.commerce.product(),
            price: Number(faker.commerce.price()),
            thumbnail:faker.image.imageUrl()
        }
        data.push(item);
    }
    return data
    
  
}

module.exports = {generateProduct}