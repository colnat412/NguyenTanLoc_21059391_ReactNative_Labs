var values = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C", "Nguyen Van D"];
Array.prototype.myFind = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      return this[i];
    }
  }

  return undefined;
};

var res = values.myFind((item) => {
  return item === "Nguyen Van C";
});

console.log(res);

var res2 = values.myFind((item) => {
  return item === "Not";
});

console.log(res2);
