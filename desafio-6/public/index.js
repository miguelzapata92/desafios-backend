console.log("script ok")
const socket = io();
const productos = []

const button = document.getElementById("submit");
const buttonMessage = document.getElementById("buttonMessage");


button?.addEventListener("click", () => {
    console.log("todo ok")
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value
    }
    socket.emit('new-product', product);
})





//chat
buttonMessage?.addEventListener("click", () => {
    console.log("chat ok")
    const message = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    socket.emit('new-message', message);
})

socket.on("new-chat-message", messages =>{
    const html = messages.map(message =>{
        return (`<div><strong>${message.email}</strong>:<em>${message.message}</em></div>`)
    }).join(' ') //el join agrega ese espacio a cada uno de los elementos del array
    document.getElementById("viewchat").innerHTML = html})










socket.on("lista productos", productos =>{
    //parte de renderizado

    const html = messages.map(message =>{
        return (`<div><strong>${message.name}</strong>:<em>${message.message}</em></div>`)
    }).join(' ') //el join agrega ese espacio a cada uno de los elementos del array
    document.getElementById("chat").innerHTML = html})