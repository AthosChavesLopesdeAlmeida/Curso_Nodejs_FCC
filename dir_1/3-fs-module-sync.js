// sync or async are possible
const { readFileSync, writeFileSync } = require('fs')

const first  = readFileSync('./content/first.txt', 'utf-8')
const second  = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
  './content/result-sync.txt', 
  `Here is the result: ${first}, ${second}`, 
  {flag: 'a'} // With flag, the function doesn't overwrite the previous content of the file
)

