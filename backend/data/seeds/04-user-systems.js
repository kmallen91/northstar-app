
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_systems').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_systems').insert([
        {user_id: 1, system_id: 1},
        {user_id: 1, system_id: 2},
        {user_id: 2, system_id: 1},
        {user_id: 2, system_id: 3},
        {user_id: 3, system_id: 2},
        {user_id: 3, system_id: 3}
      ]);
    });
};
