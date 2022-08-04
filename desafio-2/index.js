const Contenedor = require('./contenedor');




const producto1 =    {
    "title": "Escuadra",
    "price": 123.45,
    "thumbnail": 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
  }
 const producto2 =    {
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
    
}
  
  const producto3 =   {
    "title": "Globo Terráqueo",
    "price": 345.67,
    "thumbnail": 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
  }


    
async function ejecutarDesafio(){

    

     const contenedor = new Contenedor('./productos.txt');

     //Primero limpiamos el archivo de texto

    let cleanFile = await contenedor.deleteAll();

     //Guardando los productos

    let objeto1 = await contenedor.save(producto1);

    let objeto2 = await contenedor.save(producto2);

    let objeto3 = await contenedor.save(producto3);

    //Mostrando todos los productos

    let productos = await contenedor.getAll();

    console.log(productos);

    //Retornando ID:

    console.log(`El id del producto 1 es: ${objeto1}`);

    console.log(`El id del producto 2 es: ${objeto2}`);

    console.log(`El id del producto 3 es: ${objeto3}`);

    //Buscamos por id

    idSearch = await contenedor.getById(1);

    //Eliminamos por id

    idEliminado = await contenedor.deleteById(2);
    
}



ejecutarDesafio();