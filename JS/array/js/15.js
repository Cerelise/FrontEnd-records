let arr = [1, 2, 3, 4, 5];

function includes(array, item) {
  for (const value of array) if (item === value) return true;
  return false;
}

console.log(includes(arr, 4));
