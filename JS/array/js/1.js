// 创建数组
// 使用Array构造函数
const arr = new Array(20);
console.dir(arr);

const array = new Array("red", "blue", 1, 2, 3);
console.log(array.join("-"));

// 使用字面量
let arr1 = [1, 2, 3, 4];
console.log(arr1);

// 关于数组的类型
console.log(typeof arr); // object 是一个引用类型

// 引用类型的特性
// 虽然arr2复制了arr1，但它们引用的实际是同一个内存地址
// arr1 arr2用的是同一个引用类型
let arr2 = arr1;
arr2[1] = "red";
console.log(arr1);
console.log(arr2);

// 值类型则是完全的复制
let a = 1;
let b = a;
b = 20;
console.log(a);
console.log(b);
