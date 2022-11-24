const {options} = require('../config/knex.config')
const knex = require('knex')(options)

knex.schema.createTable('productos',table => {
    table.increments('producto_id').primary(),
    table.timestamp('timestamps').defaultTo(knex.fn.now()),
    table.string('nombre'),
    table.string('descripcion'),
    table.string('codigo'),
    table.string('imagen'),
    table.integer('precio'),
    table.integer('stock')
}).then(() => {
    console.log('Table created')
}).catch((err) => {
    console.log('err')
    throw err
}).finally(() => {
    knex.destroy
})