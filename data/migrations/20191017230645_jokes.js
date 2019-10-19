exports.up = function(knex) {
  return knex.schema.createTable('jokes', jokes => {
    jokes.increments();

    jokes
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');

    jokes.string('joke', 256);

    jokes.string('setup', 256);

    jokes.string('delivery', 256);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jokes');
};
