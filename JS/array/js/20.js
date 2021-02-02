let lessons = [
  { title: "媒体查询响应式布局", category: "css" },
  { title: "FLEX 弹性盒模型", category: "css" },
  { title: "MYSQL多表查询随意操作", category: "mysql" },
];

// for (let i = 0; i < lessons.length; i++) {
//   lessons[i].title = `${lessons[i].title}(免费教程)`;
// }

for (const value of lessons) {
  value.title = `${value.title}(免费教程)`;
}
console.table(lessons);

// 值类型与引用类型使用for of进行数组元素值变更的注意事项
// 值类型不受影响
// let arr = [1, 2, 3];

// 引用类型会发生改变
let obj = [{ n: 1 }, { n: 2 }];
for (let value of obj) {
  // value += 10;
  value.n += 10;
}
console.table(obj);

for (const key in lessons) {
  lessons[key].category = `${lessons[key].category} 2021`;
}
console.table(lessons);
