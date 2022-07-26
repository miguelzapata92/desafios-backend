class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push(
            {
            nombre: nombre, 
            autor: autor
            }
         )
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
     
    
}

let usuario1 = new Usuario("Miguel","Zapata");

//Agregando Mascotas
usuario1.addMascota("Leia");
usuario1.addMascota("Oliver");

//Agregando Libros
usuario1.addBook("Historia del Siglo XX", "Eric Hobsbawm");

console.log(`El nombre del usuario es: ${usuario1.getFullName()}`);
console.log(`El usuario tiene ${usuario1.countMascotas()} mascotas.`);
console.log(`Tìtulo de los libros ingresados:  ${usuario1.getBookNames()} `);





