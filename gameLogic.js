var ticTacToe = require('./ticTacToe.js'),
    gameBoard = [new Array(3), new Array(3), new Array(3),];

function isSquareEmpty(val) {
    return val === '';
}

function onEachSquare(callback) {
    gameBoard.forEach(function (row, i) {
        row.forEach(function (element, j) {
           callback(element, i, j);
        });
    });
}

function clearGameBoard() {
    onEachSquare(function (element) {
       element = '';
    });
}

function completedColumn(column, letter) {
    var threeInARow = true;
    gameBoard.forEach(function (row, i) {
        threeInARow = threeInARow && row[column] === letter;
    });
}

function completedRow(row, letter) {
    var threeInARow = true;
    gameBoard[row].forEach(function (element) {
        threeInARow = threeInARow && element === letter;
    });
    return threeInARow;
}

function completedDiagonal(letter) {
    
}

function isGameOver() {
    var foundEmptySquare = false,
        connectedX = [new Array(3), new Array(3), new Array(3)],
        connectedY = [new Array(3), new Array(3), new Array(3)];
    onEachSquare(function (element, row, column) {
        foundEmptySquare = isSquareEmpty(element);
        connectedX[row][column] = ticTacToe.utils.toNumber(isX(element)) + ticTacToe.utils.toNumber(isX(
        
