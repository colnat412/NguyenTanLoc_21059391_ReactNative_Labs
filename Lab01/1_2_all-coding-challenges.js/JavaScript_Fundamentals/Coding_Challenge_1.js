var Mark = {
  mass: 78,
  height: 1.69,
};
var John = {
  mass: 92,
  height: 1.95,
};

var Mark_v2 = {
  mass: 95,
  height: 1.88,
};
var John_v2 = {
  mass: 85,
  height: 1.76,
};

var BMI_Mark = Mark.mass / (Mark.height * Mark.height);
console.log("Mark's BMI: " + BMI_Mark);
var BMI_John = John.mass / (John.height * John.height);
console.log("John's BMI: " + BMI_John);
var markHigherBMI = BMI_Mark > BMI_John;
console.log(
  markHigherBMI
    ? "Mark's BMI is higher than John's"
    : "John's BMI is higher than Mark's"
);
var BMI_Mark_v2 = Mark_v2.mass / (Mark_v2.height * Mark_v2.height);
console.log("Mark's BMI_v2: " + BMI_Mark_v2);
var BMI_John_v2 = John_v2.mass / (John_v2.height * John_v2.height);
console.log("John's BMI_v2: " + BMI_John_v2);
var markHigherBMI_v2 = BMI_Mark_v2 > BMI_John_v2;
console.log(
  markHigherBMI_v2
    ? "Mark's BMI is higher than John's"
    : "John's BMI is higher than Mark's"
);
