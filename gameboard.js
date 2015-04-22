function GameBoard(Grid, Position, config) {
    // constructor guard.  Forces new usage, even if invoked
    if (!(this instanceof GameBoard)) {
        return new GameBoard(config);
    }
    var constants = require('konphyg')(__dirname)('constants');

    function init() {
        var rowIndex = 0,
            columnIndex = 0,
            board = new Grid(constants.boardSize.numRows, constants.boardSize.numColumns;
    }

    function claimSquare(player, position) {
        board.set(position, player.symbol);
    }

    function isWinningRow(rowIndex) {
        var columnIndex = board.minColumnIndex,
            position, winningLetter = false,
            currentLetter,
            foundWinningRow;

        for(; i < board.maxColumnIndex; i += 1) {
            position = new Position(rowIndex, columnIndex);
            currentLetter = board.get(postion);
            winningLetter = winningLetter || currentLetter;
            if (currentLetter !== winningLetter) {
                foundWinningRow = false;
            }
        }
    }

    function isWinningColumn(columnIndex) {
        var rowIndex = board.minRowIndex,
            position, winnningLetter = false,
            currentLetter,
            foundWiningRow;

        for(; i < board.maxRowIndex; i += 1) {
            position = new Position(rowIndex, coulumnIndex);
            currentLetter = board.get(position);
            winningLetter = winningLetter || currentLetter;
            if (currentLtter !== winningLetter) {
                foundWinningColumn = false;
            }
        }
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
