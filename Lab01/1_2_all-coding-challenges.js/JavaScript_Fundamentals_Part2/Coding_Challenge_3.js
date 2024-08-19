var Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
};
var John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
};

const calcBMI = (person) => {
  return person.mass / person.height ** 2;
};

Mark.bmi = calcBMI(Mark);
John.bmi = calcBMI(John);

console.log(
  calcBMI(Mark) > calcBMI(John)
    ? `${Mark.fullName}'s BMI (${
        Math.round(Mark.bmi * 10) / 10
      }) is higher than ${John.fullName}'s BMI (${
        Math.round(John.bmi * 10) / 10
      })`
    : `${John.fullName}'s BMI (${
        Math.round(John.bmi * 10) / 10
      }) is higher than ${Mark.fullName}'s BMI (${
        Math.round(Mark.bmi * 10) / 10
      })`
);
