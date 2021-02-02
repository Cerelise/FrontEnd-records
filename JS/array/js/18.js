let arr = [1, 3, 8, 7, 4];
arr.sort(function (a, b) {
  // -1 从小到大  1 从大到小
  return a - b; // b - a
});
console.table(arr);

let cart = [
  { name: "iphone", price: 10000 },
  { name: "Macbook pro", price: 14000 },
  { name: "ipad", price: 5000 },
];
cart = cart.sort(function (v1, v2) {
  return v1.price - v2.price;
});
console.table(cart);
