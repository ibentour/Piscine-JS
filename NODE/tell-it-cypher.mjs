import { readFile, writeFile } from 'fs/promises'

const [inputFile, action, outputFile] = process.argv.slice(2)

try {
  const data = await readFile(inputFile)
  
  if (action === 'encode') {
    const encoded = data.toString('base64')
    const fileName = outputFile || 'cypher.txt'
    await writeFile(fileName, encoded)
  } else if (action === 'decode') {
    const decoded = Buffer.from(data.toString(), 'base64')
    const fileName = outputFile || 'clear.txt'
    await writeFile(fileName, decoded)
  } else {
    throw new Error('Invalid action. Use "encode" or "decode"')
  }
} catch (error) {
  console.error(error.message)
  process.exit(1)
}