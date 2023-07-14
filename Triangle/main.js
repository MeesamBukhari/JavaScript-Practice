// In this code, we use three nested loops to construct the triangle pattern. The outer loop (i) iterates over the rows of the triangle from 1 to the triangleHeight.
var triangleHeight = 5;
var trianglePattern = '';

for (var i = 1; i <= triangleHeight; i++) {        // In this code, we use three nested loops to construct the triangle pattern. The outer loop (i) iterates over the rows of the triangle from 1 to the triangleHeight.
  for (var j = 1; j <= triangleHeight - i; j++) {  // The first inner loop (j) prints the spaces before the asterisks in each row. It starts from 1 and goes up to the difference between triangleHeight and the current row number (i). This ensures that the spaces decrease as we move down the rows.
    trianglePattern += ' ';
  }
  for (var k = 1; k <= 2 * i - 1; k++) {        // The second inner loop (k) prints the asterisks in each row. It starts from 1 and goes up to 2 * i - 1. This ensures that the number of asterisks increases by 2 for each row.
    trianglePattern += '*';
  }
  trianglePattern += '\n';       // Inside the loops, we concatenate the spaces and asterisks to the trianglePattern string. After each row is complete, we append a newline character (\n) to move to the next line.
}

console.log(trianglePattern);