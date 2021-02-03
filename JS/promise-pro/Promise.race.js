/*
 * @Author       : Cerelise
 * @Date         : 2020-09-03 16:15:31
 * @LastEditors  : Cerelise
 * @LastEditTime : 2020-09-03 16:15:34
 * @FilePath     : \promise-pro\Promise.race.js
 */
const fs = require("fs");

function readFile(path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function (err, data) {
      if (err || isSetError) {
        reject("承诺未实现");
      }

      const resData = JSON.parse(data);

      resolve(resData);
    });
  });
}

Promise.race([
  readFile("./data/user.json", true),
  readFile("./data/course.json"),
  readFile("./data/userCourse.json"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 谁先完成就先返回哪一个Promise的结果，无论是还是fulfilled还是rejected
// 如上例,当最先完成的user.json请求为reject状态，则不会返回下一个Promise的结果
// 如果其他两组请求为reject则不受影响，正常输出
// 当参数为空时，返回空

// 测试资源或者接口的响应速度
