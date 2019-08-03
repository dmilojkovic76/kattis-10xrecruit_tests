const readline = require('readline');

let inputData = [];
let persons = [];

class Person {
	constructor (_name, _blood, _parent1, _parent2) {
		this.name = _name;
		this.blood = _blood;
		this.parent1 = _parent1;
		this.parent2 = _parent2;
	}

	
}

/**
 * Return the amount of blood of the founder
 * @param {String} claimer 
 * @param {Array} list 
 */
const calculateBlood = (claimer, list) => {
	console.log(`Calculating blood amount for claimer: ${claimer.name}`);
	
		for (let i = 0; i < list.length; i++) {			
			if (persons[i + 1].blood === 0) {
				const iClaimer = list[i].split(' ')[0];
				if (iClaimer === claimer){
					const iParent1 = list[i].split(' ')[1];
					const iParent2 = list[i].split(' ')[2];
					console.log(`processing data: ${iClaimer}'s parents: ${iParent1} and ${iParent2}`);
					iClaimer.blood = calculateBlood(iClaimer, list);
				}
			}
		}
		return claimer.blood;
	
};


const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.on('line', (input) => {
	inputData.push(input);
});

r1.on('close', () => {
	const relativesCount = parseInt(inputData[0].split(' ')[0]);
	const claimersCount = parseInt(inputData[0].split(' ')[1]);
	const founder = inputData[1];
	const relativesArr = inputData.slice(2, 2 + relativesCount);
	const claimersArr = inputData.slice(2 + relativesCount);
	persons.push(new Person(founder, 1, '', ''));
	for (let i = 0; i < claimersCount; i++){
		persons.push(new Person(claimersArr[i], 0, '', ''));
	}

	for (let i = 0; i < persons.length; i++){
		if (persons[i].name != founder)
			persons[i].blood = calculateBlood(persons[i], relativesArr);
	}

	console.log();	
	console.log('Finished reading the file.');
	console.log(inputData);
	console.log(`Number of relatives: ${relativesCount}`);
	console.log(`Number of claimers: ${claimersCount}`);
	console.log(`The Founder: ${founder}`);
	console.log('Relatives:');
	console.log(relativesArr);
	console.log('Claimers:');
	console.log(claimersArr);
	console.table(persons);
	
})