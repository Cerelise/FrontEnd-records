let arr = ["Cerelise", "Catsayer"];
// shift 从第一位元素开始删除元素
let vars = arr.shift();
console.log(vars);
console.log(arr);
// unshift 添加
arr.unshift("Wang");
console.log(arr);
// push 从最后一位元素开始添加元素
arr.push("red");
console.log(arr);
// pop 删除
let v = arr.pop();
console.log(v);

// 为空数组填充元素
console.log(Array(5).fill("green"));
// 开始位置,结束位置(不包含)
console.log([1, 2, 3, 4].fill("green", 0, 2));
