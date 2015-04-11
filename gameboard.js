function GameBoard() {
    // constructor guard.  Forces new usage, even if invoked
    if (!(this instanceof GameBoard)) {
        return new GameBoard();
    }
    var board = [new Array(3), new Array(3), new Array(3)],
        constants = require('konphyg')(__dirname)('constants');

    function

    function threeInARow() {
        board[constants.middleRowIndex].forEach(function (middleSquare) {
            
        }
    }
}

module.exports = GameBoard;
