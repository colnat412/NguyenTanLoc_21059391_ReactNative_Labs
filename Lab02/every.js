var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.myEvery = function (callback) {
  var flag = true;
  this.forEach((item) => {
    if (callback(item) == false) {
      flag = false;
    }
  });

  return flag;
};

console.log(
  numbers.myEvery((item) => {
    return item < 11;
  })
);

console.log(
  numbers.myEvery((item) => {
    return item < 5;
  })
);
