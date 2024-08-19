const calcTip = (tips) => {
  return tips >= 50 && tips <= 300 ? tips * 0.15 : tips * 0.2;
};
console.log("Tip for $100: $" + calcTip(100));

var bills = [125, 555, 44];
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("Bills: $" + bills);
console.log("Tips: $" + tips);
console.log("Totals: $" + total);
