import { writeFileSync } from 'fs'

const input = process.argv[2];

if (!input) {
    process.exit(1);
}

function makeVeryDisco(word) {
    const midPoint = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, midPoint);
    const secondHalf = word.slice(midPoint);

    return secondHalf + firstHalf;
}

const result = input
    .split(' ')
    .map(word => makeVeryDisco(word))
    .join(' ');

try {
    writeFileSync('verydisco-forever.txt', result);
} catch (error) {
    console.error('Error writing to file:', error.message);
    process.exit(1);
}