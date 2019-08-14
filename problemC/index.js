/* eslint-disable fp/no-mutating-methods */
/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
/* eslint-disable fp/no-loops */
/* eslint-disable max-lines-per-function */
const readLine = require('readline');

const r1 = readLine.createInterface(
	{
		input: process.stdin,
		output: process.stdout,
	},
);

const inputData = [];

/**
 * Helper function that generates an object structured and filled with input data.
 * @returns {Object} a structured and populated object
 */
const generateData = () => {
	const t = parseInt(inputData[0], 10); // Number of test cases in the file (0 < t ≤ 2000)
	const tmpData = {};
	// Parse inputData for all test cases tc
	for (let tc = 0; tc < t; tc++) {
		const n = parseInt(inputData[1 + 7 * (tc)][0], 10); // The number of caves (1 ≤ n ≤ 10000)
		const m = parseInt(inputData[1 + 7 * (tc)][1], 10); // The number of the connecting tunnels in the network (0 ≤ m ≤ 50000)
		const d = {}; // m lines description of the tunnels with a, b denoting caves and l is the air necessary for diving (0 ≤ a, b < n; 0 ≤ l ≤ 500)
		const i = parseInt(inputData[1 + 7 * (tc) + m + 1], 10); // The number of idols in the cave system (0 ≤ i ≤ 8)
		const p = []; // i integers p1,…,pi giving the caves withing the network containing an idol (0 ≤ p1,…,pi < n)
		const air = parseInt(inputData[1 + 7 * (tc) + m + 3], 10); // Liters of air a you have available (0 ≤ a ≤ 1000000)
		// Loop through m tunnels and extract a, b and l putting them in an object d
		for (let j = 0; j < m; j++) {
			d[j] = {};
			d[j].a = parseInt(inputData[2 + 7 * (tc) + j][0], 10);
			d[j].b = parseInt(inputData[2 + 7 * (tc) + j][1], 10);
			d[j].l = parseInt(inputData[2 + 7 * (tc) + j][2], 10);
		}
		// Loop through i times to set the caves with the idols
		for (let k = 0; k < i; k++) {
			p.push(parseInt(inputData[1 + 7 * (tc) + m + 2][k], 10));
		}
		tmpData[tc] = {
			n, m, d, i, p, air,
		};
	}
	return tmpData;
};

r1.on('line', (line) => {
	if (line !== '') { line.length > 1 ? inputData.push(line.split(' ')) : inputData.push(line); } // eslint-disable-line no-unused-expressions
});

r1.on('close', () => {
	const data = generateData();
	const dataL = Object.entries(data).length;

	for (let tc = 0; tc < dataL; tc++) { // Loop through all given test cases
		let idols = 0;
		let airRemaining = data[tc].air;
		const takenPaths = []; // The list of paths already taken
		const takenIndexes = []; // The list of indexes of already taken paths
		while (airRemaining > 0 && takenPaths.length < data[tc].m) { // m is given number of paths
			const airL = Object.entries(data[tc].d).length;
			let dIndex = 0;
			let dSmallest = 10000;
			for (let acl = 0; acl < airL; acl++) { // Looping through paths to find the least amount of air needed
				if (data[tc].d[acl].l < dSmallest && !takenIndexes.includes(acl)) {
					dSmallest = data[tc].d[acl].l; // The smallest amount of air needed
					dIndex = acl; // The index of a path with the smallest amount of air needed
				}
			}
			airRemaining -= data[tc].d[dIndex].l * 2; // Deduce the needed amount of air to go to idol and back
			const pathToTake = data[tc].d[dIndex].b; // using index, find the path to take
			if (airRemaining >= 0 && !takenPaths.includes(pathToTake)) {
				// if we still have air left and we haven't already been on this path
				idols++; // take the idol
				takenPaths.push(pathToTake); // update the list of taken paths
				takenIndexes.push(dIndex); // and the list of path indexes
			}
		}
		console.log(idols);
	}
});
