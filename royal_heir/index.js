const readline = require('readline');

let inputData = [];
let persons = [];

class Person {
	constructor (_name, _blood) {
		this.name = _name;
		this.blood = _blood;
	}

	
}
const calculateBlood = (claimer, list) => {
	for (let i = 0; i < list.length; i++) {
		const child = list[i].split(' ')[0];
		const parent1 = list[i].split(' ')[0];
	}
	return 0;
};


const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.on('line', (input) => {
	inputData.push(input);
});

r1.on('close', () => {
	const relatives = parseInt(inputData[0].split(' ')[0]);
	const claimers = parseInt(inputData[0].split(' ')[1]);
	const founder = inputData[1];
	const relativesArr = inputData.slice(2, 2 + relatives);
	const claimersArr = inputData.slice(2 + relatives);
	persons.push(new Person(founder, 1));
	for (let i = 0; i < claimers; i++){
		persons.push(new Person(claimersArr[i], 0));
	}

	for (let i = 0; i < persons.length; i++){
		if (persons[i].name != founder)
			persons[i].blood = calculateBlood(persons[i], relativesArr)
	}

	console.log();	
	console.log('Finished reading the file.');
	console.log(inputData);
	console.log(`Number of relatives: ${relatives}`);
	console.log(`Number of claimers: ${claimers}`);
	console.log(`The Founder: ${founder}`);
	console.log('Relatives:');
	console.log(relativesArr);
	console.log('Claimers:');
	console.log(claimersArr);
	console.table(persons);
	
})