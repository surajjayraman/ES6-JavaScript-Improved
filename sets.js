// Automatically removes the duplicate entry "Super Mario Bros."
// when the Set is created.
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);

// Modifying Sets
games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);
console.log(games.values());

// Using the SetIterator
console.log(games.values().next());

// Using a for...of Loop
for (const game of games) {
  console.log(game);
}