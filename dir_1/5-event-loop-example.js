const { readFile } = require('fs')

console.log('Started the first task');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) return null

  console.log(result);
  console.log('First task completed');
})

console.log('Starting second task');

