var values = [
  "Nguyen Van A",
  "Nguyen Van B",
  "Nguyen Van C",
  "Nguyen Van D",
  10,
  20,
  30,
  40,
  50,
];

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }

  return this;
};

console.log(
  values.myForEach((item) => {
    return item + 3;
  })
);
