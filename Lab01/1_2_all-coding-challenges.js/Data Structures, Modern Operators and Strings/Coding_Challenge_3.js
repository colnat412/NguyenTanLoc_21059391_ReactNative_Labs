// 1. Create a 'gameEvents' map with sample data
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [75, "🔁 Substitution"],
  [81, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log("Events: ", events);

// 2. Remove the unfair yellow card from minute 64
gameEvents.delete(64);
console.log("Remove after 64: ", gameEvents);

// 3. Compute and log: "An event happened, on average, every 9 minutes"
const timeSpan = [...gameEvents.keys()].pop();
const averageEventTime = timeSpan / gameEvents.size;
console.log(
  `An event happened, on average, every ${Math.round(averageEventTime)} minutes`
);

// 4. Loop over 'gameEvents' and log each element, marking the half of the game
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
  console.log(`${half} ${minute}: ${event}`);
}
