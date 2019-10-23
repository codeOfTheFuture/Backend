exports.up = function(knex) {
  return knex.schema.table('jokes', jokes => {
    jokes.boolean('private');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jokes');
};
