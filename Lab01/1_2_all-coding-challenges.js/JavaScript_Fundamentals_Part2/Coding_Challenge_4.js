const calcTip = (tips) => {
  return tips >= 50 && tips <= 300 ? tips * 0.15 : tips * 0.2;
};
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Use loops and push
var tips = [];
var total = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}
console.log("Bills: $" + bills);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log("Average: $" + calcAverage(total));
