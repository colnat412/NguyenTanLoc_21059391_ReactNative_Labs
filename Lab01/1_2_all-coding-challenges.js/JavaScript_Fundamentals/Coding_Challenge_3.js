var avg_score_Dolphins_v1 = (96 + 108 + 89) / 3;
var avg_score_Koalas_v1 = (88 + 91 + 110) / 3;
console.log("Version 1:");
if (avg_score_Dolphins_v1 > avg_score_Koalas_v1) {
  console.log("Dolphins win with " + avg_score_Dolphins_v1 + " points");
} else if (avg_score_Dolphins_v1 < avg_score_Koalas_v1) {
  console.log("Koalas win with " + avg_score_Koalas_v1 + " points");
} else {
  console.log("Dolphins and Koalas draw");
}
var avg_score_Dolphins_Bonus_v1 = (97 + 112 + 101) / 3;
var avg_score_Koalas_Bonus_v1 = (109 + 95 + 123) / 3;
console.log("Bonus 1:");
if (avg_score_Dolphins_Bonus_v1 > avg_score_Koalas_Bonus_v1) {
  avg_score_Dolphins_Bonus_v1 > 100
    ? console.log(
        "Dolphins win with " + avg_score_Dolphins_Bonus_v1 + " points"
      )
    : console.log("No team wins the trophy");
} else if (avg_score_Dolphins_Bonus_v1 < avg_score_Koalas_Bonus_v1) {
  avg_score_Koalas_Bonus_v1 > 100
    ? console.log("Koalas win with " + avg_score_Koalas_Bonus_v1 + " points")
    : console.log("No team wins the trophy");
} else {
  console.log("Dolphins and Koalas draw");
}
var avg_score_Dolphins_Bonus_v2 = (97 + 112 + 101) / 3;
var avg_score_Koalas_v2 = (109 + 95 + 106) / 3;
console.log("Bonus 2:");
if (avg_score_Dolphins_Bonus_v1 > avg_score_Koalas_Bonus_v1) {
  avg_score_Dolphins_Bonus_v1 > 100
    ? console.log(
        "Dolphins win with " + avg_score_Dolphins_Bonus_v1 + " points"
      )
    : console.log("No team wins the trophy");
} else if (avg_score_Dolphins_Bonus_v1 < avg_score_Koalas_Bonus_v1) {
  avg_score_Koalas_Bonus_v1 > 100
    ? console.log("Koalas win with " + avg_score_Koalas_Bonus_v1 + " points")
    : console.log("No team wins the trophy");
} else {
  if (avg_score_Dolphins_Bonus_v1 > 100 && avg_score_Koalas_Bonus_v1 > 100) {
    console.log("Dolphins and Koalas draw");
  } else {
    console.log("No team wins the trophy");
  }
}
