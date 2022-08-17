
const form = document.getElementById('form');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const title = document.getElementById('title').value
    const price = document.getElementById('price').value
    const thumbnail = document.getElementById('thumbnail').value

    const data = {title, price, thumbnail};

    console.log(data);
    try {
       const request = await fetch('/api/productos', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json'}, 
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    catch (error) {
        return error;
    }
     
})

