const {promises: fs} = require('fs');

class Contenedor{

    constructor (ruta) {

        this.ruta = ruta;
      
    }

   async save(nuevoObjeto) {

        // comprobando id previo

        const objetos = await this.getAll()

        //lógica para obtener el id
        let newId;

        if(objetos.length === 0) {
            newId = 1;
        } else {
            const ultimoID = parseInt(objetos[objetos.length - 1].id);
            newId = ultimoID + 1;
        }

        //agregando el id al objeto
        objetos.push({id: newId, ...nuevoObjeto})
        

        try {
            //El stringify convierte el objeto JSON en cadena de texto
            await fs.writeFile(this.ruta, JSON.stringify(objetos, null, 2))
            return newId
        }catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async getById(id) {

        const objetos = await this.getAll();
        const objetoNuevo = objetos.find(elemento => elemento.id === id);
        console.log(objetoNuevo);
        return objetoNuevo;

    }

    async getAll() {
        try{
            const objetos = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(objetos); 
        } catch (error) {
            return [];
        }
    }

    async deleteById(id) {

        const objetos = await this.getAll()

        const nuevoObjeto = objetos.filter(elemento => elemento.id !== id);

        if(nuevoObjeto.length === objetos.length){
            throw new Error(`Error al borrar: no se encontró el ID ${id}`);
        } 
        
        try {
            //le paso el id a eliminar.
            await fs.writeFile(this.ruta, JSON.stringify(nuevoObjeto, null, 2));
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`);
        }

    }

    async deleteAll() {

        await fs.writeFile('./productos.txt', '');

    }  
}

module.exports = Contenedor;

//const instancia = new Contenedor('./productos.txt');

//instancia.save({title: 'afrrrr', price: '8'})

//instancia.deleteById(2);
//instancia.getById(1);
//instancia.deleteAll();