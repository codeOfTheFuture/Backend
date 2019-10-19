const db = require('../data/dbConfig');

module.exports = {
  add,
  findById,
  findBy,
};

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .select('*')
    .first()
    .innerJoin('jokes', 'users.id', 'jokes.user_id')
    .where({ user_id: id })
    .select('*');
}

function findBy(filter) {
  return db('users').where(filter);
}
