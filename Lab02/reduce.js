var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

var sum = numbers.myReduce((acc, item) => {
  return acc + item;
}, 0);

console.log(sum);
