const knex = require('knex');

class Container {
    constructor(config, tableName){
        this.config = config;
        this.tableName = tableName;
        this.knex = knex(this.config);    
    }

    save = data =>{
        this.knex(this.tableName).insert(data)
        .then(() => {
            console.log('mensaje guardado');    
        }).catch((err) => {
            console.log(err);
            throw err;
        });
    }

    getById = async id => {
        try {
            let data = await this.knex.from(this.tableName).select().table(this.tableName).where('id', id).first();
            if (data) {
                return data;
            } else {
                return { message: 'Id no encontrado' };
            }
        } catch (err) {
            console.log(err)
        }
    }
    getAll = async () => {
        try {
            let data = await this.knex.from(this.tableName).select('*')
            return data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
    deleteById = async id => {
        try {
            this.knex.from(this.tableName).where('id', '=', id).del()
            return { message: 'El id ingresado ha sido eliminado' };
        } catch (err) {
            console.log(err);
        }
    }
    deleteAll = async () => {
        try {
            this.knex.from(this.tableName).del()
            return { message: 'Todos los datos han sido eliminados' }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Container;