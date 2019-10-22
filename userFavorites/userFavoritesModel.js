const db = require('../data/dbConfig');

module.exports = {
  add,
  findById,
  find,
  findByUserId,
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

function findByUserId(id) {
  console.log(id);
  return db('users')
    .innerJoin('userFavorites', 'users.id', 'userFavorites.user_id')
    .where({ user_id: id })
    .select(
      'userFavorites.id',
      'userFavorites.user_id',
      'userFavorites.joke_id',
    );
}

function find() {}
