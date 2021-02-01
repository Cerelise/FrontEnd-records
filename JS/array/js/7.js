// let arr = ["Cerelise", 2021];
// let name = arr[0];
// let year = arr[1];

// 解构赋值
// let [name, year] = arr;
// console.log(name, year);

function get() {
  return ["Cerelise", 2021];
}
let [name, year] = get();
console.log(name, year);

("use  strict");
var [n, y] = ["Cerelise", 2021];
console.log(n);

const [...arr] = "Wang";
console.log(arr);
console.log(..."wang");

let [, years] = ["Cerelise", 2021];
console.log(years);

let [names, ...args] = ["ARK", "Cerelise", 2021];
console.log(args);
let a = ["pro", ...args];
console.log(a);

let [ne, yr = 2021] = ["Cerelise"];
console.log(yr);

function show([name1, year1]) {
  console.log(name1, year1);
}
show(["Cerelise", 2021]);
