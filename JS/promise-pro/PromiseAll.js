const fs = require("fs");

let num = 1;

function readFile(path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function (err, data) {
      if (err || isSetError) {
        reject("承诺失效" + num++);
      }

      const resData = JSON.parse(data);

      resolve(resData);
    });
  });
}

readFile("./data/user.json")
  .then((res) => {
    // 返回结果
    console.log(res);
    // 语法糖 直接返回一个Promise对象
    // return Promise.resolve("请求成功");
    // return new Promise((resolve,reject) => { resolve("请求成功") })

    return Promise.reject("请求失败，请检查网络设置");
  })
  .then(
    (res) => {
      // 查询状态
      console.log(res);
    },
    (err) => {
      console.log("then:" + err);
    }
  )
  .catch((err) => {
    console.log("reject:" + err);
  });

// readFile("./data/user.json").then((res) => {
//   console.log(res);
// });

// readFile("./data/course.json").then((res) => {
//   console.log(res);
// });

// readFile("./data/userCourse.json").then((res) => {
//   console.log(res);
// });

// 合并三个文件内部的内容为一个数组 并且 按照顺序排列   如果一个读取失败，让这个数据集合返回一个rejected
// 接收一个enterable类型的数据 -> Array Set Map 可迭代对象
// 数组为参数，里面可以是Promise对象，也可以不是Promise对象

// Promise.all([
//   readFile("./data/user.json"),
//   readFile("./data/course.json", true),
//   readFile("./data/userCourse.json", true),
//   // 0,
//   // "Cerelise",
//   // true,
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 用多个异步任务并发运行，它的结果创建承诺之后使用，等待所有任务结果的完成
// interable内部元素传递的是Promise对象集合，如果不是Promise对象，则会直接返会resolve Promise。resolve(0 || 'Cerelise' || true)
// interable内部没有元素，返回空数组
// 有一个Promise是rejected 实例回调为 rejected “牵一发而动全身”
// 失败的原因是第一个失败的Promise的结果

// 关于Promise.all的使用
//  加载数据的接口并没有整合
// 一个页面加载的时候，我们往往要通过异步请求来加载数据以渲染网页
// 比如说一个首页有轮播图数据、分类数据、也有推荐数据。也就是说，这些数据可以整合成一个接口将其返回
// 而这些接口可以单个请求，也可以一起请求。当我想如果一个请求失败，就返回一个rejected，说明这个网页请求是失败的，需要页面重新加载
