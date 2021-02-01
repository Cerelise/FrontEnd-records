// 检测数组
console.log(Array.isArray({}));

// 数组转换为字符串
// console.log([1, 3, 4].toString());

// let arr = [1, 2, 3].toString();
// let arr = String([1, 2, 3]);
let arr = [1, 2, 3].join("-");
console.log(typeof arr);
console.log(arr);

// 将字符串放到get参数值实例
console.log(location.href + "?id=" + arr);

let str = "apple";
// console.log(str.split(""));
// console.log(str.split(","));
console.log(str.length);
console.log(Array.from(str));

let obj = {
  0: "desktop",
  1: 10,
  length: 2,
};
console.log(Array.from(obj));
