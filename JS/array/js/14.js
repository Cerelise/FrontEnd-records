// 查找
let arr = [7, 3, 2, 8, 2, 6, "9"];
console.log(arr.indexOf(2)); // 2 从前面查找2出现的位置
console.log(arr.indexOf(9)); // -1
//从第二个元素开始向后查找
console.log(arr.indexOf(6, 3));

if (arr.indexOf(2) != -1) {
  console.log("找到了");
}

console.log(arr.includes(8));
if (arr.includes(10)) {
  console.log("找到了");
}

let arr1 = [7, 3, 2, 8, 2, 6];
//从第五个元素向前查找
console.log(arr1.lastIndexOf(2, 5));

//从最后一个字符向前查找（不包含最后一个字符）
console.log(arr1.lastIndexOf(8, -2));

console.log(arr1.lastIndexOf(2)); // 4 从后查找2出现的位置
