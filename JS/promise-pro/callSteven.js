function callSteven(success) {
  return new Promise((resolve, reject) => {
    console.log("Calling Steven...");
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}
// async function action() {
//   try {
//     await callSteven(true);
//     console.log("Steven picked up the phone");
//   } catch (error) {
//     console.log("Steven rejected the call");
//   }
// }

// action();

(async () => {
  try {
    await callSteven(true);
    console.log("Steven picked up the phone");
  } catch (error) {
    console.log("Steven rejected the call");
  }
})();

// callSteven(false)
//   .then(() => {
//     console.log("Steven picked up the phone");
//   })
//   .catch(() => {
//     console.log("Steven rejected the call");
//   });
