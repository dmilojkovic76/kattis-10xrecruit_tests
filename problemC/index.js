const readLine = require('readline');

const r1 = readLine.createInterface(
	{
		input: process.stdin,
		output: process.stdout,
	},
);

const inputData = [];
const data = {};

r1.on('line', (line) => {
	if (line !== '') { line.length > 1 ? inputData.push(line.split(' ')) : inputData.push(line); } // eslint-disable-line no-unused-expressions
});

r1.on('close', () => {
	console.log('Begin program.');
	const t = parseInt(inputData[0], 10); // Number of testcases in the file (0 < t ≤ 2000)
	for (let i = 1; i <= t; i++) {
		data.i = {
			n: parseInt(inputData[1 + 8 * (i - 1)].split(' ')[0], 10), // The number of caves (1 ≤ n ≤ 10000)
			m: parseInt(inputData[1 + 8 * (i - 1)].split(' ')[1], 10), // The number of the connecting tunnels in the network (0 ≤ m ≤ 50000)
			descr: [], // description of the tunnels with a, b denoting caves and l is the air necessary for diving (0 ≤ a, b < n; 0 ≤ l ≤ 500)
			i: 0, // The number of idols in the cave system (0 ≤ i ≤ 8)
			p: [], // i integers p1,…,pi giving the caves withing the network conaining an idol (0 ≤ p1,…,pi < n)
			a: 0, // Liters of air a you have available (0 ≤ a ≤ 1000000)
		};
		for (let j = 0; j < data.i.m; j++) {
			data.i.descr.push(inputData[2 + 8 * (i - 1)]);
		}
	}
	console.log(inputData);
	console.log(data);
});
