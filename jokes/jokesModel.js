const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findById,
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

function find() {
  return db('jokes').select();
}
