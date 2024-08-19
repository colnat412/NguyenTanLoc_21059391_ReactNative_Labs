const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  return avgDolphins >= 2 * avgKoalas
    ? `Dolphins win (${avgDolphins} vs ${avgKoalas})`
    : avgKoalas >= 2 * avgDolphins
    ? `Koalas win (${avgKoalas} vs ${avgDolphins})`
    : `No team wins`;
};

const dolphinsAvg_v1 = calcAverage(44, 23, 71);
const koalasAvg_v1 = calcAverage(65, 54, 49);
console.log(checkWinner(dolphinsAvg_v1, koalasAvg_v1));

const dolphinsAvg_v2 = calcAverage(85, 54, 41);
const koalasAvg_v2 = calcAverage(23, 34, 27);
console.log(checkWinner(dolphinsAvg_v2, koalasAvg_v2));
