import { Schema, model } from "mongoose"

const chatCollection = 'chat'

const chatSchema = new Schema({
    author: {
        id: {
            type: String,
            required: true
        } ,
        nombre: {
            type: String,
            required: true
        } ,
        apellido: {
            type: String,
            required: true
        } ,
        edad: {
            type: String,
            required: true
        } ,
        alias: {
            type: String,
            required: true
        } ,
        avatar: {
            type: String,
            required: true
        }
    },
    text: {
        type: String,
        required: true
    }
},{
    timestamps: false,
})

export const chat = model(chatCollection, chatSchema)