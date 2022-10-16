import { chat } from "../models/chatModel.js";

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