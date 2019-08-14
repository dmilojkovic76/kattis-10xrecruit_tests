const readline = require('readline');

const inputData = [];
const persons = {};
let highestBlood = 0;
let nextHeir = 'No Heir thus far!';

class Person {
	constructor(_name, _blood, _parent1, _parent2) {
		this.name = _name;
		this.blood = _blood;
		this.parent1 = _parent1;
		this.parent2 = _parent2;
		this.calculated = false;
	}
}

/**
 * Return the amount of blood of a given person
 * @param {String} person
 */
const calculateBlood = (person) => {
	// console.log(`Calculating blood amount for person: ${person.name}`);
	let par1bl = 0;
	let par2bl = 0;

	if (persons[person.parent1] && persons[person.parent1].calculated) {
		par1bl = persons[person.parent1].blood;
	} else if (persons[person.parent1]) {
		par1bl = calculateBlood(persons[person.parent1]);
	} else {
		par1bl = 0;
	}

	if (persons[person.parent2] && persons[person.parent2].calculated) {
		par2bl = persons[person.parent2].blood;
	} else if (persons[person.parent2]) {
		par2bl = calculateBlood(persons[person.parent2]);
	} else {
		par2bl = 0;
	}

	// TODO: This is terrible, needs fixing! Do not mutate the object that is being passed in.
	person.calculated = true; // eslint-disable-line no-param-reassign
	person.blood = (par1bl + par2bl) / 2; // eslint-disable-line no-param-reassign

	return (par1bl + par2bl) / 2;
};

/**
 * Returns an object with two keys with values as parents names
 * @param {Stg} name
 * @param {Array} arr
 */
const calculateParents = (name, arr) => {
	for (let i = 0; i < arr.length; i++) {
		const currentItem = arr[i].split(' ');
		// console.log(`Pass no: ${i + 1} - Looking for ${name}'s parents.`);
		if (currentItem[0] === name) {
			// console.log(`Found them! ${name}'s parents are: ${currentItem[1]} and ${currentItem[2]}`);
			return { parent1: currentItem[1], parent2: currentItem[2] };
		}
		// console.log(`Not in this pass! Going for pass no: ${i + 2}`);
	}
	// console.log(`We shouldn't be here! It appears that ${name} has no parents`);
	return { parent1: '', parent2: '' };
};

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

r1.on('line', (input) => {
	if (input !== '') { inputData.push(input); }
});

r1.on('close', () => {
	// console.log('Finished reading the file.');
	// console.log(inputData);

	const relativesCount = parseInt(inputData[0].split(' ')[0], 10);
	// const claimersCount = parseInt(inputData[0].split(' ')[1], 10);
	const founder = inputData[1];
	const relativesArr = inputData.slice(2, 2 + relativesCount);
	const claimersArr = inputData.slice(2 + relativesCount);
	const allPeople = [];
	relativesArr.forEach((row) => {
		const el = row.split(' ');
		el.forEach((name) => {
			if (!allPeople.includes(name)) { allPeople.push(name); }
		});
	});
	// console.log(`Number of relatives: ${relativesCount}`);
	// console.log(`Number of claimers: ${claimersCount}`);
	// console.log(`The Founder: ${founder}`);
	// console.log('Relatives:');
	// console.log(relativesArr);
	// console.log('Claimers:');
	// console.log(claimersArr);
	// console.log('List of all people involved:');
	// console.log(allPeople);

	// Add people to the persons list with calculated parents
	for (let i = 0; i < allPeople.length; i++) {
		const parents = calculateParents(allPeople[i], relativesArr);
		persons[`${allPeople[i]}`] = new Person(allPeople[i], 0, parents.parent1, parents.parent2);
	}

	// The founder has to have full blood level
	persons[`${founder}`].blood = 1;
	persons[`${founder}`].calculated = true;

	// console.log('Persons list with parents:');
	// console.table(persons);

	// TODO: Use a different method of iterrating over keys in persons object
	// Calculate blood levels of the people and update persons list
	for (const person in persons) { // eslint-disable-line no-restricted-syntax
		if (persons.hasOwnProperty(person)) { // eslint-disable-line no-prototype-builtins
			const currentP = persons[person];
			if (currentP.name !== founder && currentP.calculated === false) {
				// console.log(currentP.name, persons[currentP.parent1].blood);
				currentP.blood = calculateBlood(currentP);
			}
		}
	}

	// console.log('Persons list with parents and blood:');
	// console.table(persons);

	// Find the person with the highest amount of royal blood
	claimersArr.forEach((claimer) => {
		if (persons[claimer]) {
			if (persons[claimer].blood > highestBlood) {
				highestBlood = persons[claimer].blood;
				nextHeir = persons[claimer];
			}
		}
		// after this loop we know the next heir
	});

	// Printout the name of the next heir.
	console.log(nextHeir.name);
});
