console.log("script ok")
const socket = io();

const button = document.getElementById("submit");

button?.addEventListener("click", () => {
    console.log("todo ok")
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value
    }
    document.getElementById('form').reset();
    socket.emit('new-product', product);
})

socket.on("new-chat-message", messages =>{
    //parte de renderizado

    const html = messages.map(message =>{
        return (`<div><strong>${message.name}</strong>:<em>${message.message}</em></div>`)
    }).join(' ') //el join agrega ese espacio a cada uno de los elementos del array
    document.getElementById("chat").innerHTML = html})