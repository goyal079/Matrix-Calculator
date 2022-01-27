const readline = require("readline-sync");
const { subtraction } = require("./operations");
const { fillMatrix } = require("./operations");

function subtractMatrix() {
  let rows = readline.question(
    "Enter number of rows for each matrix".blue.bold + ":"
  );
  let cols = readline.question(
    "Enter number of columns for each matrix".blue.bold + ":"
  );
  rows = parseFloat(rows);
  cols = parseFloat(cols);
  try {
    if (rows == 0 || cols == 0) {
      throw "Try again with a valid number of rows and columns.".red.bold;
    } else {
      console.clear();
      console.log("\nEnter values for the first matrix:".cyan.italic);
      let matrix1 = fillMatrix(rows, cols);
      console.clear();
      console.log("\nEnter values for the second matrix:".cyan.italic);
      let matrix2 = fillMatrix(rows, cols);
      console.clear();
      console.log("\nHere's Matrix A:\n".green.italic.bold);
      console.table(matrix1);
      console.log("\nHere's Matrix B:\n".green.italic.bold);
      console.table(matrix2);
      console.log(
        "Below is the resultant matrix after matrix subtraction:".green.italic
          .bold
      );
      console.table(subtraction(matrix1, matrix2));
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log(":)".rainbow);
  }
}

exports.subtractMatrix = subtractMatrix;
