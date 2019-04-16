const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find
};

async function add(movie) {
  const [id] = await db('moviesDB').insert(movie)
}

function find() {
    return db('moviesDB');
}
