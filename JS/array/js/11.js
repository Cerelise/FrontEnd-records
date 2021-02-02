function move(array, from, to) {
  if (from < 0 || to >= array.length) {
    console.error("参数错误");
    return;
  }
  const newArray = [...array];
  let item = newArray.splice(from, 1);
  newArray.splice(to, 0, item[0]);
  return newArray;
}

let array = [1, 2, 3, 4];
console.log(move(array, 0, 1));
