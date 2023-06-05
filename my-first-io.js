const fs = require('fs')
let buf = fs.readFileSync(process.argv[2])
const lines = buf.toString().split('\n')
console.log(lines.length-1)