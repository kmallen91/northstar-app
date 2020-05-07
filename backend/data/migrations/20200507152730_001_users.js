
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments()
      table 
        .string('email', 256)
        .unique()
        .notNullable()
      table.string('password', 128).notNullable()
      table.string('first_name', 128)
      table.string('last_name', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
