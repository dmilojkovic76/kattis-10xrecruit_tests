const readline = require('readline');

const r1 = readline.createInterface(
	{
		input: process.stdin,
		output: process.stdout,
	},
);

const inputStream = [];
let rowsCount = 0;
let columnsCount = 0;
const grid = [];
const path = [];

/**
 * Return an array with nextRow nextColumn pair
 * @param {Array} arr The Array in which we are
 * @param {Integer} row Current row index
 * @param {Integer} col Current column index
 */
const findNext = (arr, row, col) => {
	let s = 1000001;
	let newRow = 0;
	let newCol = 0;
	const lastRow = path[path.length - 1][0];
	const lastCol = path[path.length - 1][1];
	if (arr[row - 1] && arr[row - 1][col] < s) {
		if (lastRow !== row - 1 || lastCol !== col) {
			if (!path.includes([row - 1, col])) { // includes ne radi dobro zbog necega
				s = arr[row - 1][col];
				newRow = row - 1;
				newCol = col;
			}
		}
	}
	if (arr[row + 1] && arr[row + 1][col] < s) {
		if (lastRow !== row + 1 || lastCol !== col) {
			if (!path.includes([row + 1, col])) {
				s = arr[row + 1][col];
				newRow = row + 1;
				newCol = col;
			}
		}
	}
	if (arr[row][col - 1] && arr[row][col - 1] < s) {
		if (lastRow !== row || lastCol !== col - 1) {
			if (!path.includes([row, col - 1])) {
				s = arr[row][col - 1];
				newRow = row;
				newCol = col - 1;
			}
		}
	}
	if (arr[row][col + 1] && arr[row][col + 1] < s) {
		if (lastRow !== row || lastCol !== col + 1) {
			if (!path.includes([row, col + 1])) {
				s = arr[row][col + 1];
				newRow = row;
				newCol = col + 1;
			}
		}
	}
	return [newRow, newCol];
};

r1.on('line', (line) => {
	// collect the data from the command line
	inputStream.push(line);
});

r1.on('close', () => {
	rowsCount = parseInt(inputStream[0].split(' ')[0], 10);
	columnsCount = parseInt(inputStream[0].split(' ')[1], 10);
	const matrix = inputStream.slice(1);

	for (let r = 0; r < rowsCount; r++) {
		grid.push([]);
		for (let c = 0; c < columnsCount; c++) {
			grid[r].push(matrix[r].split(' ')[c]);
		}
	}

	let column = 0;
	let biggest = 0;
	let start = true;

	while (column < columnsCount) {
		let rowIndex = path[path.length - 1] ? path[path.length - 1][0] : 0;
		if (start) {
			let smallest = 1000001;
			for (let row = 0; row < rowsCount; row++) {
				if (grid[row][column] < smallest) {
					smallest = grid[row][column];
					rowIndex = row;
				}
			}
			path.push([rowIndex, column]);
			start = false;
		}

		const nextCell = findNext(grid, rowIndex, column);
		path.push(nextCell);
		column = nextCell[1];
		console.log('Came back from findNext:');
		console.log(nextCell[0], nextCell[1]);
		console.log(path);
	}

	console.log(grid);
	console.log(path);
	console.log(biggest);
});
