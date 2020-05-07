
exports.up = function(knex) {
  return knex.schema.createTable('systems', table => {
      table.increments()
      table.string('name', 256)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('systems')
};
