
exports.up = function(knex) {
    return knex.schema.createTable('account_systems', table => {
        table
          .integer('account_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('accounts')
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
  return knex.schema.dropTableIfExists('account_systems')
};
