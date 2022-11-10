const optionsSQLite3 = {
	client: 'sqlite3',
	connection: {
		filename: './db/products.sqlite'
	},
	useNullAsDefault: true
}

const optionsMariaDB = {
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'desafioDB'
	}
}

module.exports = { optionsSQLite3, optionsMariaDB };