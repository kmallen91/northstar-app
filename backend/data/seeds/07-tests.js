
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {id: 1, unit_id: 1, name: 'Test 1', lower_parameter: 0, upper_parameter: 10 },
        {id: 2, unit_id: 2, name: 'Test 2', lower_parameter: 0, upper_parameter: 10 },
        {id: 3, unit_id: 3, name: 'Test 3', lower_parameter: 0, upper_parameter: 10 },
      ]);
    });
};
