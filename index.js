const colors = require("colors");
const readline = require("readline-sync");
const { addMatrix } = require("./matrixadd");
const { productMatrix } = require("./product");
const { transposeMatrix } = require("./transpose");
const { subtractMatrix } = require("./subtract");

const userInput = readline.question(
  "Exit".magenta.italic.bold +
    "--" +
    "0".grey.bold +
    "\nAdd matrix".magenta.italic.bold +
    "--" +
    "1".grey.bold +
    "\nSubtract matrix".magenta.italic.bold +
    "--" +
    "2".grey.bold +
    "\nMultipy matrix".magenta.italic.bold +
    "--" +
    "3".grey.bold +
    "\nTranspose matrix".magenta.italic.bold +
    "--" +
    "4".grey.bold +
    "\nChoose one of the above options".magenta.italic.bold.underline +
    ":"
);

switch (true) {
  case userInput == 0:
    console.log("Exiting.\n:(".red.bold);
    break;
  case userInput == 1:
    console.clear();
    console.log("MATRIX ADDITION".magenta.italic.bold.underline);
    addMatrix();
    break;
  case userInput == 2:
    console.clear();
    console.log("MATRIX SUBTRACTION".magenta.italic.bold.underline);
    subtractMatrix();
    break;
  case userInput == 3:
    console.clear();
    console.log("MATRIX MULTIPLICATION".magenta.italic.bold.underline);
    productMatrix();
    break;
  case userInput == 4:
    console.clear();
    console.log("MATRIX TRANSPOSE".magenta.italic.bold.underline);
    transposeMatrix();
    break;
  default:
    console.log("Try again with a valid input...\n".red.bold);
}
