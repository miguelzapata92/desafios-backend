console.log("script ok")
const socket = io();

const button = document.getElementById("submit");
//Cargar Productos
/*button?.addEventListener("click", () => {
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
*/
//chat

const buttonMessage = document.getElementById("buttonMessage");
buttonMessage?.addEventListener("click", () => {
    console.log("chat ok")
    d = new Date();
    const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

    const message = {
        author: {
          id: document.getElementById("id").value,
          name: document.getElementById("name").value,
          lastname: document.getElementById("lastname").value,
          age: document.getElementById("age").value,
          alias: document.getElementById("alias").value,
          avatar: document.getElementById("avatar").value,
        },
        text: document.getElementById("text").value,
        date: date,
    }
    socket.emit('new-message', message);
})


//datos insertados en el html
socket.on("all-messages", chat =>{
    const html = chat.map(message =>{       
        return (`
        <div style="width:100vw">
            <span class="fw-bold" style="color: blue;">${message.author.name}</span>
            <span style="color: brown;">&nbsp[${message.author.date}]</span>
            <span class="fst-italic" style="color: green;">&nbsp: ${message.text}</span>
        </div>
    `)
    }).join(' ') //el join agrega ese espacio a cada uno de los elementos del array
    document.getElementById("viewchat").innerHTML = html
})


