exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('jokes').insert([
        {
          user_id: 1,
          first_line: "What do you call a hippie's wife?",
          punchline: 'A Mississippi!',
          private: false,
        },
        {
          user_id: 1,
          first_line: 'What did the duck say when she bought a lipstick?',
          punchline: 'Put it on my bill!',
          private: false,
        },
        {
          user_id: 1,
          first_line: 'I hate Russian dolls.?',
          punchline: "They're so full of themselves.",
          private: false,
        },
        {
          user_id: 1,
          first_line: 'What do you call a man with a rubber toe?',
          punchline: 'Roberto!',
          private: false,
        },
        {
          user_id: 1,
          first_line: 'Where did the computer go dancing?',
          punchline: 'The disc-o!',
          private: false,
        },
        {
          user_id: 2,
          first_line: 'What do bees do if they need a ride?',
          punchline: 'Wait at the buzz stop!',
          private: false,
        },
        {
          user_id: 2,
          first_line: 'What do you give to a sick lemon?',
          punchline: 'Lemon aid!',
          private: false,
        },
        {
          user_id: 2,
          first_line:
            'What did the little mountain say to the bigger mountain?',
          punchline: 'Hi Cliff!',
          private: true,
        },
        {
          user_id: 2,
          first_line: 'What do you call a monkey that loves Doritos?',
          punchline: 'A chipmunk!',
          private: false,
        },
        {
          user_id: 2,
          first_line: 'Why did the can crusher quit his job?',
          punchline: 'Because it was soda pressing!',
          private: true,
        },
        {
          user_id: 3,
          first_line: 'Why are there gates around cemeteries?',
          punchline: 'Because people are dying to get in!',
          private: false,
        },
        {
          user_id: 3,
          first_line: 'What do you call a cow with two legs?',
          punchline: 'Lean beef!',
          private: false,
        },
        {
          user_id: 3,
          first_line: 'Do you remember that joke I told you about my spine?',
          punchline: 'It was about a weak back!',
          private: false,
        },
        {
          user_id: 3,
          first_line: 'I just went to an emotional wedding.',
          punchline: 'Even the cake was in tiers.',
          private: false,
        },
        {
          user_id: 3,
          first_line: "When's the best time to go to the dentist?",
          punchline: 'Tooth-hurtie!',
          private: false,
        },
        {
          user_id: 4,
          first_line: 'What do you call a dangerous sun shower?',
          punchline: 'A rain of terror!',
          private: false,
        },
        {
          user_id: 4,
          first_line: 'Why do seagulls fly over the sea?',
          punchline: "Because if they flew over the bay, they've bagels!",
          private: false,
        },
        {
          user_id: 4,
          first_line: 'What do you call a farm that makes bad jokes?',
          punchline: 'Corny!',
          private: false,
        },
        {
          user_id: 4,
          first_line: 'Why do fish live in salt water?',
          punchline: 'Because pepper makes them sneeze!',
          private: false,
        },
        {
          user_id: 4,
          first_line: 'What streets to ghosts haunt?',
          punchline: 'Dead ends!',
          private: false,
        },
        {
          user_id: 5,
          first_line: 'What do you tell actors to break a leg?',
          punchline: 'Because every play has a cast!',
          private: false,
        },
        {
          user_id: 5,
          first_line: 'What kind of dogs love car racing?',
          punchline: 'Lap dogs!',
          private: false,
        },
        {
          user_id: 5,
          first_line: 'What did Winnie the Pooh say to his agent?',
          punchline: 'Show me the honey!',
          private: false,
        },
        {
          user_id: 5,
          first_line: 'What do you call birds who stick together?',
          punchline: 'Vel-crows.',
          private: false,
        },
        {
          user_id: 5,
          first_line: 'Today I gave my dead batteries away.',
          punchline: 'They were free of charge.',
          private: false,
        },
      ]);
    });
};
