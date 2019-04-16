
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, one: 'one', two: 'two', three: 'three', four: 'four', five: 'five', six: 'six', seven: 'seven', eight: 'eight', nine: 'nine'},
        {id: 2, one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9'},
      ]);
    });
};
