function checkDogs(dogsJulia, dogsKate) {
  // 1. Create a shallow copy of Julia's array and remove the cat ages
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);

  // 2. Combine Julia's corrected data with Kate's data
  const allDogs = dogsJuliaCorrected.concat(dogsKate);

  // 3. Log whether each dog is an adult or a puppy
  allDogs.forEach((age, index) => {
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
}

// 4. Test data
const data1Julia = [3, 5, 2, 12, 7];
const data1Kate = [4, 1, 15, 8, 3];
const data2Julia = [9, 16, 6, 8, 3];
const data2Kate = [10, 5, 6, 1, 4];

// Run the function for both test datasets
checkDogs(data1Julia, data1Kate);
checkDogs(data2Julia, data2Kate);
