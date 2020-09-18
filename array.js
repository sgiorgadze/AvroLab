let array1 = [
  [3, 8, 9, 7, 6],
  [6, 3, 8, 9, 7],
  [7, 6, 3, 8, 9],
];

let array2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

let array3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

function perimeterSum(a) {
  const rows = a.length;
  let sum = 0;

  for (let i = 0; i < rows; i++) {
    let cols = a[i].length;
    for (let j = 0; j < cols; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        sum += a[i][j];
      }
    }
  }
  return sum;
}

let result1 = perimeterSum(array1);
let result2 = perimeterSum(array2);
let result3 = perimeterSum(array3);

console.log(result1);
console.log(result2);
console.log(result3);
