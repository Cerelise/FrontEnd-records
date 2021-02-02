let arr = [2, 8, 4, 6, 10];

// sort
function sortAPI(array, callback) {
  for (const n in array) {
    for (const m in array) {
      if (callback(array[n], array[m]) < 0) {
        const temp = array[n];
        array[n] = array[m];
        array[m] = temp;
      }
    }
  }
  return array;
}

arr = sortAPI(arr, function (a, b) {
  return b - a;
});

console.log(arr);
