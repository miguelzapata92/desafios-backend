const socket = io.connect()

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