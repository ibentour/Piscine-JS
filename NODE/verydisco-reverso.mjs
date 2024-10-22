import { readFileSync } from 'fs'

const filename = process.argv[2];

if (!filename) {
    process.exit(1);
}

function reverseVeryDisco(word) {
    const midPoint = Math.ceil(word.length / 2);
    const originalFirstHalf = word.slice(-midPoint);
    const originalSecondHalf = word.slice(0, word.length - midPoint);

    return originalFirstHalf + originalSecondHalf;
}

try {
    const content = readFileSync(filename, 'utf8');

    const result = content
        .split(' ')
        .map(word => reverseVeryDisco(word))
        .join(' ');

    console.log(result);
} catch (error) {
    console.error('Error reading file:', error.message);
    process.exit(1);
}