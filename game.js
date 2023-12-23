
const gk = 'Manuel Neuer';
const fieldPlayers = [
  'Dayot Upamecano',
  'Kim Min-jae',
  'Matthijs de Ligt',
  'Joshua Kimmich',
  'Serge Gnabry',
  'Leon Goretzka',
  'Harry Kane',
  'Leroy Sané',
  'Kingsley Coman',
  'Eric Maxim Choupo-Moting',
];
const players1 = [gk, ...fieldPlayers];
const players2 = [];
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(players1Final);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. loop over the array
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
//2.
let sums = 0;
for (const odd of Object.values(game.odds)) {
  sums = sums + odd;
}
console.log(sums / Object.values(game.odds).length);
//3. Print odds formated
const oddArray = Object.entries(game.odds);
//console.log(oddArray);
//let oddStr = 'Odd of';
for (const [team, odd] of oddArray) {
  //const teamStr = game[team] ? `victory ` + game[team] : `draw`;
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...players) {
  // console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
//7
//team1 < team2 && console.log('Team 1 is more likely to win');
//team1 > team2 && console.log('Team 2 is more likely to win');
