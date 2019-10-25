const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findById,
  findByUserId,
  update,
  remove,
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
      'jokes.first_line',
      'jokes.punchline',
      'jokes.private',
    );
}

function find() {
  return db('jokes').select();
}

function update(changes, id) {
  return db('jokes')
    .where('id', Number(id))
    .update(changes)
    .then(() => {
      return findById(Number(id));
    });
}

function remove(id) {
  console.log('model id', id);
  return db('jokes')
    .where('id', Number(id))
    .del();
}
