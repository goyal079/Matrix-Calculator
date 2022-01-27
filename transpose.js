const readline = require("readline-sync");
const { transpose } = require("./operations");
const { fillMatrix } = require("./operations");

function transposeMatrix() {
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
      console.log("\nEnter values for your matrix:".cyan.italic);
      let matrix = fillMatrix(rows, cols);
      console.clear();
      console.log("\nHere's your given matrix:\n".green.italic.bold);
      console.table(matrix);
      console.log(
        "Below is the resultant transpose of your given matrix:".green.italic
          .bold
      );
      console.table(transpose(matrix));
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log(":)".rainbow);
  }
}

exports.transposeMatrix = transposeMatrix;
