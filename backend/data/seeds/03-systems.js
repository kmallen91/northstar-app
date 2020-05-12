
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('systems').del()
    .then(function () {
      // Inserts seed entries
      return knex('systems').insert([
        {id: 1, name: 'System 1'},
        {id: 2, name: 'System 2'},
        {id: 3, name: 'System 3'}
      ]);
    });
};
