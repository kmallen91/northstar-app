
exports.up = function(knex) {
  return knex.schema.createTable('units', table => {
      table.increments()
      table
        .integer('system_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('systems')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('units')
};
