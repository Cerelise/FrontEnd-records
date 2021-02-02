//   let arr = [1, 2, 3, 4, 5];
//   let res = arr.find(function (item) {
//     // console.log(arr);
//     return item == 2;
//   });
//   console.log(res);

// 查找引用类型
let lessons = [{ name: "html" }, { name: "css" }, { name: "js" }];
// includes 不能查找引用类型
console.log(lessons.includes({ name: "css" }));
let status = lessons.find(function (item) {
  return item.name == "js";
});
console.log(status);

let index = lessons.findIndex(function (item) {
  return item.name == "js";
});
console.log(index);
