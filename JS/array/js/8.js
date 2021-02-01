let arr = ["Cerelise", "Catsayer"];
// arr[2] = "Wang";
// arr[arr.length] = "Gold";
// console.log(arr);

// let arr1 = ["apple", "orange"];
// arr = [...arr, ...arr1];
// console.log(arr);

// arr.push("shop", "js", "css");
// console.table(arr);

let arr2 = ["nodejs", "webpack"];
let length = arr.push("nuxt", ...arr);
console.log(length);
console.table(arr);

function rangeArray(begin, end) {
  const array = [];
  for (let i = begin; i <= end; i++) {
    array.push(i);
  }
  return array;
}
console.table(rangeArray(10, 15));
