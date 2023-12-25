
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.create an array
const events = [...new Set(gameEvents.values())];
//console.log(events);
//2.remove entry
gameEvents.delete(64);
//console.log(gameEvents.entries());
//3.
//average event, print

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
);

//4.loop and print
const printHalfTime = function (gameEvents) {
  // for (const [i, player] of game.scored.entries())

  for (const [i, event] of gameEvents.entries()) {
    const half = i <= 45 ? 'FIRST' : 'SECOND';
    console.log(`${half} HALF ${i}:${event}`);
  }
};
printHalfTime(gameEvents);
