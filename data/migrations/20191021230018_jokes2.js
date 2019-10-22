exports.up = function(knex) {
  return knex.schema.table('jokes', jokes => {
    jokes.dropColumn('joke');

    jokes.renameColumn('setup', 'first_line');

    jokes.renameColumn('delivery', 'punchline');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jokes');
};
