//  promise 承诺
// 实现承诺 承诺石沉大海 承诺等待结果中...
// resolve reject  pending
// 解决问题  拒绝接收  准备中...
// 解决异步流程化的一种手段
// promise 并不是异步函数

// promise是一个构造函数 需要new
// promise有且只有一个参数 executor 执行器
// executor 有两个参数 分别是 resolve reject 他们都是函数
// executor 在 new promise 的时候调用

// 他要通过new Promise这个函数以后，它会返回一个Promise对象 () => {} executor

// executor是同步执行的
let promise = new Promise((resolve, reject) => {
  // console.log(1);
  // resolve("承诺实现");
  // reject("承诺终止");
  throw new Error("Error:承诺石沉大海");
});

// console.log(2);

// then回调函数的参数是resolve的结果
promise.then(
  (res) => {
    console.log("Then");
    // console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

console.log("global");
// 1 global
// 2 Then
// then是异步调用

// resolve reject  pending 三者关系
// pending -> resolved
// pending -> rejected
// 顺序颠倒就会失效
// resolved <-> rejected 也会失效

promise
  .then((res) => {
    console.log("Then");
    // console.log(res);
    return new Promise((resolve, reject) => resolve("成功"));
  })
  .then((res) => {
    console.log(res);
  });
// 每一个then里边它其实可以返回一个新的Promise 如果是resolved走第一个回调 rejected则走第二个回调

// 如果一个Promise是rejected，他能不能获取这个回调函数的值？
promise
  .then(
    (res) => {
      console.log(1);
    }
    // () => {
    //   console.log("then", err);
    //   return 'error then';  无法执行
    // }
  )
  .then((err) => {
    console.log("then", err);
  })
  .catch((err) => {
    console.log("catch", err);
  });

// 当then里有处理错误的回调时，catch则失效
// 如果有两个then 第一个then没有rejected处理错误的回调，第二个有处理的回调 会优先执行第二个处理错误的回调
// 第三层也可以，promise的回调处理会逐层穿透
// throw Error 优先执行 也具有穿透性
// Promise对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止
