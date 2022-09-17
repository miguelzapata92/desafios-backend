const knex = require('knex');

class Container {
    constructor(config, tableName){
        this.config = config;
        this.tableName = tableName;
        this.knex = knexLib(config);    
    }

     
}