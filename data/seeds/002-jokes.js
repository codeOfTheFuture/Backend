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
        },
        {
          user_id: 1,
          first_line: 'What did the duck say when she bought a lipstick?',
          punchline: 'Put it on my bill!',
        },
        {
          user_id: 1,
          first_line: 'I hate Russian dolls.?',
          punchline: "They're so full of themselves.",
        },
        {
          user_id: 1,
          first_line: 'What do you call a man with a rubber toe?',
          punchline: 'Roberto!',
        },
        {
          user_id: 1,
          first_line: 'Where did the computer go dancing?',
          punchline: 'The disc-o!',
        },
        {
          user_id: 2,
          first_line: 'What do bees do if they need a ride?',
          punchline: 'Wait at the buzz stop!',
        },
        {
          user_id: 2,
          first_line: 'What do you give to a sick lemon?',
          punchline: 'Lemon aid!',
        },
        {
          user_id: 2,
          first_line:
            'What did the little mountain say to the bigger mountain?',
          punchline: 'Hi Cliff!',
        },
        {
          user_id: 2,
          first_line: 'What do you call a monkey that loves Doritos?',
          punchline: 'A chipmunk!',
        },
        {
          user_id: 2,
          first_line: 'Why did the can crusher quit his job?',
          punchline: 'Because it was soda pressing!',
        },
        {
          user_id: 3,
          first_line: 'Why are there gates around cemeteries?',
          punchline: 'Because people are dying to get in!',
        },
        {
          user_id: 3,
          first_line: 'What do you call a cow with two legs?',
          punchline: 'Lean beef!',
        },
        {
          user_id: 3,
          first_line: 'Do you remember that joke I told you about my spine?',
          punchline: 'It was about a weak back!',
        },
        {
          user_id: 3,
          first_line: 'I just went to an emotional wedding.',
          punchline: 'Even the cake was in tiers.',
        },
        {
          user_id: 3,
          first_line: "When's the best time to go to the dentist?",
          punchline: 'Tooth-hurtie!',
        },
        {
          user_id: 4,
          first_line: 'What do you call a dangerous sun shower?',
          punchline: 'A rain of terror!',
        },
        {
          user_id: 4,
          first_line: 'Why do seagulls fly over the sea?',
          punchline: "Because if they flew over the bay, they've bagels!",
        },
        {
          user_id: 4,
          first_line: 'What do you call a farm that makes bad jokes?',
          punchline: 'Corny!',
        },
        {
          user_id: 4,
          first_line: 'Why do fish live in salt water?',
          punchline: 'Because pepper makes them sneeze!',
        },
        {
          user_id: 4,
          first_line: 'What streets to ghosts haunt?',
          punchline: 'Dead ends!',
        },
        {
          user_id: 5,
          first_line: 'What do you tell actors to break a leg?',
          punchline: 'Because every play has a cast!',
        },
        {
          user_id: 5,
          first_line: 'What kind of dogs love car racing?',
          punchline: 'Lap dogs!',
        },
        {
          user_id: 5,
          first_line: 'What did Winnie the Pooh say to his agent?',
          punchline: 'Show me the honey!',
        },
        {
          user_id: 5,
          first_line: 'What do you call birds who stick together?',
          punchline: 'Vel-crows.',
        },
        {
          user_id: 5,
          first_line: 'Today I gave my dead batteries away.',
          punchline: 'They were free of charge.',
        },
      ]);
    });
};
