var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.myAny = function (callback) {
  var flag = true;
  this.forEach((item) => {
    if (callback(item) == true) {
      flag = false;
    }
  });

  return flag;
};

console.log(
  numbers.myAny((item) => {
    return item > 11;
  })
);
