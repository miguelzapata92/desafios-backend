import { Schema, model } from "mongoose"

const chatCollection = 'chat'

const chatSchema = new Schema({
    author: {
        id: {
            type: String,
            required: true
        } ,
        name: {
            type: String,
            required: true
        } ,
        lastname: {
            type: String,
            required: true
        } ,
        age: {
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
    versionKey: false
})

export const chat = model(chatCollection, chatSchema)