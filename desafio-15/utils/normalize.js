import { normalize, denormalize, schema } from 'normalizr'

const autor = new schema.Entity('autores', {}, { idAttribute: "id" })
const texto = new schema.Entity('texto', {
    author: autor
})

const chat = new schema.Entity('chat', {
    author: autor,
    text: [texto]
}, { idAttribute: "id" })

const chatSchema = new schema.Array(chat)


const denormalizeData = (message) => {
    const dataDenormalizada = denormalize(message.result, chatSchema, message.entities)
    return dataDenormalizada
}

const normalizeData = (data) => {
    const dataNormalizada = normalize(data, chatSchema)

    return dataNormalizada
}

export {
    denormalizeData,
    normalizeData
}