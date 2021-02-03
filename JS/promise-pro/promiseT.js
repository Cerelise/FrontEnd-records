let prom = new Promise((resolve, reject) => {
  // resolve("请求通过");
  // reject("拒绝请求");
  throw new Error("Error:承诺石沉大海");
});

prom
  .then((res) => {
    // console.log("Then");
    console.log(res);
  })
  .then(() => {})
  .then(
    () => {},
    (err) => {
      console.log("then", err);
    }
  )
  .catch((err) => {
    console.log("catch", err);
  });

console.log("Global");
