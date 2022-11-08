import {faker} from '@faker-js/faker/locale/es'
faker.locale = 'es'

function generateProduct() {
    let data =[]
    for (let index = 0; index < 5; index++) {
        const item = {
            title: faker.commerce.product(),
            price: Number(faker.commerce.price()),
            thumbnail:faker.image.imageUrl()
        }
        data.push(item);
    }
    return(data) 
}
export { generateProduct }