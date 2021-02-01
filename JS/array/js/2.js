let array = [["apple"], ["beef", "pork"]];
console.log(array[0]);
console.log(array[1][0]);

// 组合对象存储
let lessons = [
  { name: "js", click: 10 },
  { name: "css", click: 22 },
];
console.log(lessons[1].click);

// 数组类型使用const关键字声明时，是允许修改的
const num = 6;
// num = 8; // error
const arr = [1, 2];
arr[0] = 0;
console.log(arr);
