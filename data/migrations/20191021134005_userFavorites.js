exports.up = function(knex) {
  return knex.schema.createTable('userFavorites', favs => {
    favs.increments();

    favs
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');

    favs
      .integer('joke_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('jokes');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('userFavorites');
};
