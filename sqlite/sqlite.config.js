const path = require('path')
const sqliteConfi = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, './db_sqlite')
    },
    useNullAsDefault: true
}

module.exports = {
    sqliteConfi
}