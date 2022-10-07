import mongoose from "mongoose";
 
const URL = 'mongodb://localhost:27017/ecommerce'
await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true,});


export class MongoContainer {
    constructor(model) {
        this.collection = model
    }

    async getProductById (id) {
        try {
            const data = await this.collection.find({ '_id': id })
            if (data.length == 0) {
                throw new Error('id inválido')
            } else {
                return data
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAll () {
        try {
            let data = await this.collection.find({}).lean()
            return data
        } catch (error) {
            throw new Error
        }
    }

    async saveProduct (obj) {
        try {
            const info = await this.collection.create(obj)
            return info
        } catch (error) {
            throw new Error
        }
    }

    async updateProductById (obj) {
        try {
            const { n, nModified } = await this.collection.replaceOne({ "_id": obj._id }, obj)
            if (n == 0 || nModified == 0) {
                throw new Error
            } else {
                return obj
            }
        } catch (error) {
            throw new Error
        }
    }

    async deleteById (id) {
        try {
            const { n, nDeleted } = await this.collection.deleteOne({ _id: id })
            if (n == 0 || nDeleted == 0) {
                throw new Error
            }
        } catch (error) {
            throw new Error
        }
    }
}