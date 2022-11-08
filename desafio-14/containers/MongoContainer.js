import { chat } from "../models/chatModel.js";
import { normalizeData } from "../utils/normalize.js";


export class MongoContainer {
    constructor() {
        this.collection = chat
    }


    async getAll () {
        try {
            let data = await this.collection.find({}).lean()
            data.forEach(obj => {
                obj.id = obj['_id'].toString()
                delete(obj['_id'])
            })
            return normalizeData(data)
        } catch (error) {
            throw new Error(`Error al listar todo: ${error}`)
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