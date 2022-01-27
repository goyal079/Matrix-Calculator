const readline = require("readline-sync");

function fillMatrix(rows, columns) {
  //fills the inputs taken in by the user and allocates to the respective position in the matrix
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      do {
        var a = readline.question(
          `Enter valid number at row(${i})-column(${j}) of matrix:`.yellow
        );
        a = parseFloat(a);
      } while (isNaN(a) == true);
      matrix[i][j] = a;
    }
  }
  return matrix;
}

function addition(mat1, mat2) {
  let result = mat1;
  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[0].length; j++) {
      result[i][j] += mat2[i][j];
    }
  }
  return result;
}
function subtraction(mat1, mat2) {
  let result = mat1;
  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[0].length; j++) {
      result[i][j] -= mat2[i][j];
    }
  }
  return result;
}

function product(mat1, mat2) {
  let newmat = new Array(mat1.length);

  for (let i = 0; i < mat1.length; i++) {
    newmat[i] = new Array(mat2[0].length);
    for (let j = 0; j < mat2[0].length; j++) {
      newmat[i][j] = 0;
      for (let k = 0; k < mat1[0].length; k++) {
        newmat[i][j] += mat1[i][k] * mat2[k][j];
      }
    }
  }
  return newmat;
}

function transpose(mat) {
  let newMat = [];
  let cols = mat[0].length;
  let rows = mat.length;
  for (let i = 0; i < cols; i++) {
    newMat.push([]);
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      newMat[i][j] = mat[j][i];
    }
  }
  return newMat;
}

exports.fillMatrix = fillMatrix;
exports.addition = addition;
exports.subtraction = subtraction;
exports.product = product;
exports.transpose = transpose;
