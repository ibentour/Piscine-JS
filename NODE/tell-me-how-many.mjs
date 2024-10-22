import {readdir} from "fs/promises"

const input = process.argv[2] || "."

const files = await readdir(input)

console.log(files.length);