exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', movies => {
        // movies
        //     .string('id', 128)
        movies
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        movies
            .string('one', 128)
        movies
            .string('two', 128)
        movies
            .string('three', 128)
        movies
            .string('four', 128)
        movies
            .string('five', 128)
        movies
            .string('six', 128)
        movies
            .string('seven', 128)
        movies
            .string('eight', 128)
        movies
            .string('nine', 128)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies');
  };