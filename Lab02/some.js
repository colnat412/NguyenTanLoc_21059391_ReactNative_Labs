var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.mySome = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      return true;
    }
  }

  return false;
};

console.log(
  numbers.mySome((item) => {
    return item + 2 == 12;
  })
);

console.log(
  numbers.mySome((item) => {
    return item + 2 == 13;
  })
);
