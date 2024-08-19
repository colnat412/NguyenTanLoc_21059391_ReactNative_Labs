var bills = [275, 40, 430];
for (var i = 0; i < bills.length; i++) {
  var tip =
    bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
  console.log(
    `The bill was ${bills[i]}, the tip was ${tip}, and the total value ${
      bills[i] + tip
    }`
  );
  
}
