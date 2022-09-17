const {optionsMariaDB} = require('../options/config');
const knex = require('knex')(optionsMariaDB);

knex.schema.createTable('messages', table =>{
    table.string('email');
    table.string(Date);
    table.string('message')
})
    .then(() => {
     console.log("Table created successfully")   
    }).catch((err) => {
        console.log(err);
        throw err
    });