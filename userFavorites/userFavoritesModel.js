const db = require('../data/dbConfig');

module.exports = {
  add,
  findById,
};

async function add(favJoke) {
  console.log('>>>>>', favJoke);
  const [id] = await db('userFavorites').insert(favJoke);

  return findById(id);
}

function findById(id) {
  return db('userFavorites')
    .where({ id })
    .first();
}
