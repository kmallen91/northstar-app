
exports.up = function(knex) {
  return knex.schema.createTable('user_systems', table => {
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('system_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('systems')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_systems')
};
