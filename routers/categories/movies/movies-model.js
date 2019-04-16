const db = require('../../../data/dbConfig.js');

module.exports = {
  add,
  findIdMovies,
  findById,
  update
};

async function add(movie, movieId) {
  const [id] = await db('movies').insert({
      user_id: movieId,
      one: movie.one,
      two: movie.two,
      three: movie.three,
      four: movie.four,
      five: movie.five,
      six: movie.six,
      seven: movie.seven,
      eight: movie.eight,
      nine: movie.nine
    });

  return findIdMovies(movieId);
}

function findIdMovies(movieId) {
    const user_id = movieId
    return db('movies')
        .where({ user_id })
        // .first()
}


function findById(id) {
  return db('movies')
    .where({ id })
    .first();
}

function update(movie, id) {
  const user_id = id
  return db('movies')
    .where({ user_id })
    .update(movie)
}