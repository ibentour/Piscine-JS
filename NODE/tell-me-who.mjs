import { readdir } from 'fs/promises'

const dirPath = process.argv[2] || '.';

async function listGuests() {
	try {
		let files = await readdir(dirPath);

		let guests = files.map(file => {
			const name = file.split('.')[0];
			const [firstname, lastname] = name.split('_');
			return `${lastname} ${firstname}`;
		});

		guests.sort();

		guests = guests.map((guest, index) => `${index + 1}. ${guest}`);

		console.log(guests.join('\n'));
		
	} catch (error) {
		console.error('Error reading directory:', error.message);
		process.exit(1);
	}
}

listGuests();