// Using the same 'game' variable as before
const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Süle",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Muller",
      "Gnabry",
      "Lewandowski",
      "Coman",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Muller"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Loop over the game.scored array and print each player name along with the goal number
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
const averageOdd = sum / odds.length;
console.log(`Average odd: ${averageOdd}`);

// 3. Print the 3 odds to the console in a formatted way
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr =
    team === "team1"
      ? `victory ${game.team1}`
      : team === "team2"
      ? `victory ${game.team2}`
      : "draw";
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties and the number of goals as the value
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
