const db = require('../../../data/dbConfig.js');

module.exports = {
  add,
  find,
  findById,
  // update
};

async function add(movie) {
  const [id] = await db('moviesDB').insert(movie).returning("id");
}

async function find() {
  const all = await db('moviesDB');
  return all;
}

async function findById(filmId) {
  const fetch = await db('moviesDB').where({ id: filmId }).first()
  return fetch
}

// async function update(filmId) {
//   return db('moviesDB').where({ filmId }).update(name)
// }