exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, user_id: 1, name: 'Account 1' },
        {id: 2, user_id: 2, name: 'Account 2' },
        {id: 3, user_id: 3, name: 'Account 3' },
      ]);
    });
};
