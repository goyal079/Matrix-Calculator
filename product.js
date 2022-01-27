const readline = require("readline-sync");
const { fillMatrix } = require("./operations");
const { product } = require("./operations");

function productMatrix() {
  let r1 = readline.question(
    "Enter number of rows for Matrix A".blue.bold + ":"
  );
  let c1 = readline.question(
    "Enter number of columns for Matrix A".blue.bold + ":"
  );
  let r2 = readline.question(
    "Enter number of rows for Matrix B".blue.bold + ":"
  );
  let c2 = readline.question(
    "Enter number of columns for Matrix B".blue.bold + ":"
  );
  r1 = parseFloat(r1);
  c1 = parseFloat(c1);
  r2 = parseFloat(r2);
  c2 = parseFloat(c2);
  try {
    if (r1 == 0 || c1 == 0) {
      throw "Try again with a valid number of rows and columns.".red.bold;
    } else if (c1 !== r2) {
      throw "Number of columns in Matrix A and rows in Matrix B should be equal to operate multiplication.";
    } else {
      console.clear();
      console.log("\nEnter values for the first matrix:".cyan.italic);
      let matrix1 = fillMatrix(r1, c1);
      console.clear();
      console.log("\nEnter values for the second matrix:".cyan.italic);
      let matrix2 = fillMatrix(r2, c2);
      console.clear();
      console.log("\nHere's Matrix A:\n".green.italic.bold);
      console.table(matrix1);
      console.log("\nHere's Matrix B:\n".green.italic.bold);
      console.table(matrix2);
      console.log("Below is the resultant product matrix:".green.italic.bold);
      console.table(product(matrix1, matrix2));
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log(":)".rainbow);
  }
}

exports.productMatrix = productMatrix;
