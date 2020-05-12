
exports.up = function(knex) {
  return knex.schema.createTable('tests', table => {
      table.increments()
      table
        .integer('unit_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('units')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name', 128)
      table.decimal('lower_parameter', 128)
      table.decimal('upper_parameter', 128)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tests')
};
