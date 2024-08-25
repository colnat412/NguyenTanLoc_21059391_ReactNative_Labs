// Sample game data
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

// 1. Create one player array for each team
const players1 = game.players[0];
const players2 = game.players[1];

// 2. Create variables for the goalkeeper and field players for Bayern Munich (team 1)
const [gk, ...fieldPlayers] = players1;
console.log(`Goalkeeper: ${gk}`);

// 3. Create an array 'allPlayers' containing all players of both teams
const allPlayers = [...players1, ...players2];

// 4. Create a new array 'players1Final' containing all the original team1 players plus substitute players
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log("Team 1 final players", players1Final);

// 5. Based on the game.odds object, create variables for each odd
const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names and prints each of them along with the total number of goals
function printGoals(...players) {
  console.log(`${players.length} goals were scored by:`);
  players.forEach((player) => console.log(player));
}

// Test the printGoals function with provided players
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// Call the function again with players from game.scored
printGoals(...game.scored);

// 7. Print which team is more likely to win based on the lower odd
const likelyWinner =
  (team1 < team2 && "Bayern Munich") ||
  (team2 < team1 && "Borussia Dortmund") ||
  "Draw";
console.log(`${likelyWinner} is more likely to win.`);
