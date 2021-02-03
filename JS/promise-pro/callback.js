// 函数的参数有函数 高阶函数

// function doSth(t, cb) {
//   return function () {
//     if (--t === 0) {
//       cb();
//     }
//   };
// }

function logSth(cb) {
  console.log("我终于找到女朋友了！呀呼~~~~");
  // 执行上一条语句后执行回调
  cb();
}

function logSth2(cb) {
  console.log("我分手了，裂开了");
  cb();
}

function logSth3() {
  console.log("我们又和好了");
}

// let fn = doSth(4, logSth.bind(null, logSth2));

//  回调地狱
// 回调地狱需要做什么？
// 在异步编程的基础上，做到一个同步的结果

function doSth(t) {
  return function () {
    if (--t === 0) {
      logSth(function () {
        logSth2(function () {
          logSth3();
        });
      });
    }
  };
}

let fn = doSth(4, logSth);

fn();
fn();
fn();
fn();

// ajax 异步请求数据

// $.ajax({
//   success(data1) {
//     $.ajax({
//       data: {
//         d:data1
//       },
//       success(data2) {
//         $.ajax({
//           data: {
//             d:data2
//           },
//           success(data3) {
//             $.ajax({
//               data: {
//                 d:data3
//               },
//               success(data) {
//                 return data;
//                 // 无法返回
//               }
//             })
//           }
//         })
//       }
//     })
//   }
// })

// 什么是异步？
// 比如说这里有一个函数 当此函数执行时，此函数的执行不会影响ajax的运行 你做你的，我做我的 互不相干
// 同步 我做了以后你再做
// 为什么叫异步
// javascript是单线程 只能同时进行一个任务，剩下的任务在任务队列

test();

function test() {
  console.log("test");
}

// 这两个异步请求各执行各的 运行顺序无先后之分
// 像这样的任务永远无法完成

// $.ajax({})

// $.ajax({})

// 在处理异步请求的时候，我们需要它们同步进行
// 即上一个结果出来以后，下一个要执行的任务拿到第一个异步的结果才能继续执行
