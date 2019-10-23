exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'jeff_oliver',
          password:
            '$2a$14$tFw6QHLii6nrDAyLRg2DlerIu4YwXMm7IHg7N8fTZeqyUmSrpTUim',
          email: 'jeff_oliver@email.com',
          date_created: '10222019',
        },
        {
          username: 'kyle_richardson',
          password:
            '$2a$14$tFw6QHLii6nrDAyLRg2DlerIu4YwXMm7IHg7N8fTZeqyUmSrpTUim',
          email: 'kyle_richardson@email.com',
          date_created: '10222019',
        },
        {
          username: 'mark_stahl',
          password:
            '$2a$14$tFw6QHLii6nrDAyLRg2DlerIu4YwXMm7IHg7N8fTZeqyUmSrpTUim',
          email: 'mark_stahl@email.com',
          date_created: '10222019',
        },
        {
          username: 'aciel_ochoa',
          password:
            '$2a$14$tFw6QHLii6nrDAyLRg2DlerIu4YwXMm7IHg7N8fTZeqyUmSrpTUim',
          email: 'aciel_ochoa@email.com',
          date_created: '10222019',
        },
        {
          username: 'joshua_cowley',
          password:
            '$2a$14$tFw6QHLii6nrDAyLRg2DlerIu4YwXMm7IHg7N8fTZeqyUmSrpTUim',
          email: 'joshua_cowley@email.com',
          date_created: '10222019',
        },
      ]);
    });
};
