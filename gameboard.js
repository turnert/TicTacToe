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
        return contains(position) && board[position.x][position.y] === undefined
    }

    function winningRow() {
        var foundWinningRow = false,
            winningLetter = false;
        board.forEach(function (row) {
            var isWinningRow = false;
            row.forEach(function (columnElement) {
                winningLetter = winningLetter || columnElement;
                isWinningRow = winningLetter === columnElement;
            });
            foundWinningRow = foundWinningRow || isWinningRow;
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
