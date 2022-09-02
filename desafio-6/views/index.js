const socket = io.connect()

const button = document.getElementById("submit");

button?.addEventListener("click", () => {
    console.log("todo ok")
    /*const product = {
        title: document.getElementById("nombre").value,
        price: document.getElementById("precio").value,
        thumbnail: document.getElementById("urlImagen").value
    }
    document.getElementById('form').reset();
    socket.emit('new-product', product);*/
    return false;
})