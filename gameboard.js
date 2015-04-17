function GameBoard() {
    // constructor guard.  Forces new usage, even if invoked
    if (!(this instanceof GameBoard)) {
        return new GameBoard(config);
    }
    var board = [],
        constants = require('konphyg')(__dirname)('constants'),
        emptySquares = config.boardSize.numRows * config.boardSize.numColumns;

    function init() {
        var rowIndex = 0,
            columnIndex = 0;

        for(i = 0;, i < config.boardSize.numColumns) {
            board.push(new Array[config.boardSize.numRows]);
        }
    }

    function isBoardFull() {
        return emptySquares === 0;
    }

    function isSquareEmpty(position) {
        return board[position.x][position.y] === undefined;
    }

    function iterateOverRowElements(callback) {
        board.forEach(function (row) {
            row.forEach(function (rowElement) {
                callback(rowElement);
            });
        });
    }

    function iterateOverColumnElements(callback) {
        board.forEach(function (row, rowIndex) {
            row.forEach(function (rowElement, columnIndex) {
                var columnElement = board[columnIndex][rowIndex];
                callback(columnElement);
            });
        });
    }

    function claimSquare(player, position) {
        if (isValidMove(position)) {
            board[position.x][position.y] = player.letter;
            emptySquares = emptySquares - 1;
        }
    }

    function contains(position) {
        return 0 <= position.x && position.x <= config.boardSize.numRows &&
            0 <= position.y && position.y <= config.boardSize.numColumns;
    }

    function isValidMove(position) {
        return contains(position) && isSquareEmpty(position);
    }

    function checkRowsAndColumns() {
        var foundWinningRow = false,
            winningRowLetter = false,
            winningColumnLetter = false;
        board.forEach(function (row, rowIndex) {
            var isWinningRow = false;
            row.forEach(function (rowElement, columnIndex) {
                var columnElement = board[]
                winningRowLetter = winningRowLetter || rowElement
            });
        });
    }

    function winningRow() {
        var foundWinningRow = false,
            winningLetter = false;
        board.forEach(function (row) {
            var isWinningRow = true;
            row.forEach(function (columnElement) {
                winningLetter = winningLetter || columnElement;
                isWinningRow = winningLetter === columnElement;
            });
            foundWinningRow = isWinningRow && (foundWinningRow || isWinningRow);
        });
        return foundWinningRow;
    }

    function winningColumn() {

    }

    function winningDiagonal() {
        var index = 0,
        foundWinningLine = false,
        winningLetter = false;

        for(index = 0; index < boardSize.numColumns; index += 1) {
            winningLetter = winningLetter || board[index][index];
            isWinningLine = winningLetter === board[index][index];
        }
    }
}

module.exports = GameBoard;
