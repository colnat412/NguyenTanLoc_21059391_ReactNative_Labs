var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.myFilter = function (callback) {
  var newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

var evens = numbers.myFilter((item) => {
  return item % 2 === 0;
});

console.log(evens);
