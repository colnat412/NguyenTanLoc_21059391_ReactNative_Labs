var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myMap = function (callback) {
  var newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  return newArray;
};

var doubles = numbers.myMap((item) => {
  return item * 2;
});

console.log(doubles);
