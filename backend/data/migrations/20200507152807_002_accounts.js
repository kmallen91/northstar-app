
exports.up = function(knex) {
  return knex.schema.createTable('accounts', table => {
      table.increments()
      table
        .integer('user_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts')
};
