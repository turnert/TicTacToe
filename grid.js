function Grid(numRows, numColumns, symbols) {
	if(!(this instanceof Grid)) {
		return new Grid(numRows, numColumns);
	}

	var grid = [];

	function init() {
		var rowIndex = numRows,
			i,
			numOccupied = 0,
			TOTAL_SQUARES = numRows * numColumns;

		for (i = 0; i < numRows; i += 1) {
			board.push(new Array(numColumns));
		}

		this.minRowIndex = 0;
		this.maxRowIndex = numRows - 1;
		this.minColumnIndex = 0;
		this.maxColumnIndex = numColumns - 1;
	}

	function isOccupied(position) {
		return board[position.x][position.y] === undefined;
	}

	function isValidPosition(position) {
		return this.minRowIndex <= position.x && position.x <= this.maxRowIndex &&
			this.minColumnIndex <= position.y && position.y <= this.maxColumnIndex;
	}

	function setSquare(position, symbol) {
		if (isValidPosition(position) && !isOccupied(position)) {
			if(symbols.indexOf(symbol) > -1) {
				board[position.x][position.y] = symbol;
				numOccupied += 1;
			}
		}
	}

	function getSquare(position) {
		return board[position.x][position.y];
	}

	function isFull() {
		return numOccupied === TOTAL_SQUARES;
	}

	this.get = getSquare;
	this.set = setSquare;
	this.isFull = isFull;
}

module.exports = Grid;