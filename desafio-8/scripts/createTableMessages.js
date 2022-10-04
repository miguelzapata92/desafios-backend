const {optionsMariaDB} = require('../options/config.js');
const knex = require('knex')(optionsMariaDB);

knex.schema.createTable('messages', table =>{
    table.string('email').notNullable();
    table.string(Date).notNullable();
    table.string('message').notNullable();
})
    .then(() => {
     console.log("Table created successfully")   
    }).catch((err) => {
        console.log(err);
        throw err
    });