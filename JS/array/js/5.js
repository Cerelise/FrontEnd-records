// 数组合并
let arr = ["Cerelise", "Wang"];
let arr1 = ["js", "css"];

// for (const value of arr1) {
//   arr.push(value);
// }
// console.table(arr);

// arr = [...arr, ...arr1];
// console.log(arr);

function sum(...args) {
  // console.log(args);
  return args.reduce((s, v) => {
    return (s += v);
  }, 0);
}
console.log(sum(1, 2, 3));
