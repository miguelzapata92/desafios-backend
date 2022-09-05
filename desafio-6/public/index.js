console.log("script ok")
const socket = io();





const button = document.getElementById("submit");
//Cargar Productos
button?.addEventListener("click", () => {
    console.log("todo ok")
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value
    }
    socket.emit('new-product', product);
})

socket.on("new-products", products => {
    document.getElementById('lista').innerHTML = ''
    console.log(products);
    const html = products.map(product =>{
        return  (`
        <tr> 
            <td>${product.title}</td>
            <td>$ ${product.price}</td>
            <td> ${product.thumbnail}</td>
        </tr>`)})
    document.getElementById("lista").innerHTML = html})

//chat

const buttonMessage = document.getElementById("buttonMessage");
buttonMessage?.addEventListener("click", () => {
    console.log("chat ok")
    d = new Date();
    const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

    const message = {
        email: document.getElementById("email").value,
        date: date,
        message: document.getElementById("message").value
    }
    socket.emit('new-message', message);
})

socket.on("new-chat-message", messages =>{
    const html = messages.map(message =>{
        
        return (`
        <div style="width:100vw">
            <span class="fw-bold" style="color: blue;">${message.email}</span>
            <span style="color: brown;">&nbsp[${message.date}]</span>
            <span class="fst-italic" style="color: green;">&nbsp: ${message.message}</span>
        </div>
    `)
    }).join(' ') //el join agrega ese espacio a cada uno de los elementos del array
    document.getElementById("viewchat").innerHTML = html})










socket.on("lista productos", productos =>{
    //parte de renderizado

    const html = messages.map(message =>{
        return (`<div><strong>${message.name}</strong>:<em>${message.message}</em></div>`)
    }).join(' ') //el join agrega ese espacio a cada uno de los elementos del array
    document.getElementById("chat").innerHTML = html;})