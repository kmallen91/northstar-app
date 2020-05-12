
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account_systems').del()
    .then(function () {
      // Inserts seed entries
      return knex('account_systems').insert([
        {account_id: 1, system_id: 1},
        {account_id: 1, system_id: 2},
        {account_id: 2, system_id: 1},
        {account_id: 2, system_id: 3},
        {account_id: 3, system_id: 2},
        {account_id: 3, system_id: 3}
      ]);
    });
};
