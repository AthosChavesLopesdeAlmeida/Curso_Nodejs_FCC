const { readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) return null
    const first = result

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) return null
    const second = result

    writeFile(
      './content/result-async.txt', 
      `This is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) return null
        console.log(result)
      }
    )
  })  
})