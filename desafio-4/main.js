
const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const title = document.getElementById('title').value
    const price = document.getElementById('price').value
    const thumbnail = document.getElementById('thumbnail').value

    const data = {title, price, thumbnail};

    console.log(data);
    
    fetch('/api/productos', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}, 

    })
        .then(res => res.json())
        .then(datos => console.log(datos))
        .catch(error => console.log(error))
        
})
form.reset();
