const fetch = require("node-fetch");

// function getData() {
//   return new Promise((resolve, reject) => {
//     fetch("http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true")
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

function getData() {
  fetchPost({
    url,
    success,
    error,
  });
  return fetch("http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  // return new Promise((resolve, reject) => {
  //   reject("失败了");
  // });
}

// getData().then((res) => {
//   console.log(res);
// });

// async是一个异步函数
// await是async里的一个操作符

// 声明一个Data等于await这个获取数据的函数
// getData()执行完，返回一个Promise，然后将Promise返回的结果返回给Data

// async的意思是当前这个异步函数与同一作用域下的程序是异步关系
async function logData() {
  const data = await getData();
  const p1 = await getData0();
  // const p2 = await getData1(p1);
  // const p3 = await getData2(p2);
  // const p4 = await getData3(p3);
  // const p5 = await getData4(p4);
  console.log(data);
}

logData();

console.log("Global");

// console.log(logData());

// await 是一个操作符
// 等待一个Promise对象产出结果的操作手段
// 因为getData()返回的是一个Promise对象的执行结果(无论成功或失败)，而异步请求需要时间，此时必须使用await操作符来等待它的执行。
// 如果把await去掉会发生什么？
// 返回一个Promise的pending 将一个Promise中等待并没有结果的准备状态赋值给data
// 功能是暂停async函数的执行，等待Promise处理后的结果
// 假如Promise处理的结果是rejected，会抛出异常
// async 函数是通过一个隐式的Promise返回pending状态
