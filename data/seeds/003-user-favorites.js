exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userFavorites')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('userFavorites').insert([
        { user_id: 1, joke_id: 15 },
        { user_id: 1, joke_id: 12 },
        { user_id: 1, joke_id: 9 },
        { user_id: 2, joke_id: 16 },
        { user_id: 2, joke_id: 6 },
        { user_id: 2, joke_id: 7 },
        { user_id: 3, joke_id: 3 },
        { user_id: 3, joke_id: 19 },
        { user_id: 3, joke_id: 2 },
        { user_id: 4, joke_id: 5 },
        { user_id: 4, joke_id: 21 },
        { user_id: 4, joke_id: 22 },
        { user_id: 5, joke_id: 25 },
        { user_id: 5, joke_id: 1 },
        { user_id: 5, joke_id: 3 },
      ]);
    });
};
