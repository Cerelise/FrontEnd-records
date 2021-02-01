let arr = [1, 2, 3, 4, 5];
// splice 会改变原数组，将元素填充进新数组
let array = arr.splice(0, 3, "W");
// splice 替换
// 初始位置 个数 替换内容
// arr.splice(1, 2);
arr.splice(2, 1, "Z");
// 从中间增加
arr.splice(1, 0, "C", "D");
// 从末尾增加
arr.splice(arr.length, 0, "ZZC");
// let array = arr.slice(0, 2);

console.log(array);
console.table(arr);
