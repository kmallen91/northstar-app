
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'user1@test.com', password: '1234', first_name:'Test', last_name: 'One'},
        {id: 2, email: 'user2@test.com', password: '1234', first_name:'Test', last_name: 'Two'},
        {id: 3, email: 'user3@test.com', password: '1234', first_name:'Test', last_name: 'Three'},
      ]);
    });
};
