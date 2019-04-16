exports.up = function(knex, Promise) {
    return knex.schema.createTable('moviesDB', moviesDB => {
        moviesDB.increments();
        moviesDB
          .string('name', 128)
          .notNullable()
          .unique();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('moviesDB');
  };