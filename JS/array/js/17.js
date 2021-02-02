Array.prototype.findValue = function (callback) {
  for (const value of this) {
    if (callback(value)) return value;
  }
  return undefined;
};

let arr = [1, 2, 3, 4, 5];
let re = arr.findValue(function (item) {
  return item == 2;
});
console.log(re);
