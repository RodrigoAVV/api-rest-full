const path = require('path')
module.exports = {
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname, '../sqlite/db.sqlite')
    },
    useNullAsDefault:true
}
