const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findById,
  findByUserId,
};

async function add(joke) {
  const [id] = await db('jokes').insert(joke);

  return findById(id);
}

function findById(id) {
  return db('jokes')
    .where({ id })
    .first();
}

function findByUserId(id) {
  return db('users')
    .innerJoin('jokes', 'users.id', 'jokes.user_id')
    .where({ user_id: id })
    .select(
      'jokes.id',
      'jokes.user_id',
      'jokes.joke',
      'jokes.setup',
      'jokes.delivery',
    );
}

function find() {
  return db('jokes').select();
}
