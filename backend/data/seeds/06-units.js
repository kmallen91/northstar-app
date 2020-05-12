
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {id: 1, system_id: 1, name: 'Unit 1' },
        {id: 2, system_id: 2, name: 'Unit 2' },
        {id: 3, system_id: 3, name: 'Unit 3' },
      ]);
    });
};
