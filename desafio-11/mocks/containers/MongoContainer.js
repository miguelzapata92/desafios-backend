import mongoose from "mongoose"; 
import { chat } from "../models/chatModel.js";
const URL = 'mongodb://localhost:27017/ecommerce'
await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true,});



export class MongoContainer {
    constructor() {
        this.collection = chat
    }


    async getAll () {
        try {
            let data = await this.collection.find({}).lean()
            return data
        } catch (error) {
            throw new Error
        }
    }

    async save (obj) {
        try {
            const info = await this.collection.create(obj)
            return info
        } catch (error) {
            throw new Error
        }
    }

}   