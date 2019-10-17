const db = require('../data/dbConfig');

module.exports = {
  add,
  findById,
};

const add = async user => {
  const [id] = await db('users').insert(user);

  return this.findById(id);
};

const findById = id => {
  return db('users')
    .where({ id })
    .first();
};
