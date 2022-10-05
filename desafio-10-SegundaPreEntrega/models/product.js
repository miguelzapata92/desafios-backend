import { Schema, model } from "mongoose"

const productsCollection = "products";

const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type: Number,
        required: true
    },
    UrlImage: {
        type: String,
        max: 200
    },
    description: {
        type: String,
        required: true,
        max: 500
    },
    code: {
        type: String,
        required: true,
        max: 6,
        unique: true
    },

    stock: {
        type: Number,
        required: true,
        max: 5000
    },
    id: {
        type: Number, 
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
})

export const ProductsModel = model(productsCollection, productsSchema);