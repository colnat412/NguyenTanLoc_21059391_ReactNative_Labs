function calcAverageHumanAge(ages) {
  // 1. Convert dog ages to human ages
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  // 2. Exclude dogs less than 18 human years old
  const adultDogs = humanAges.filter((age) => age >= 18);

  // 3. Calculate the average human age
  const averageHumanAge =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  return averageHumanAge;
}

// 4. Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Run the function for both test datasets
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
