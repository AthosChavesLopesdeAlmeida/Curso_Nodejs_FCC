const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') res.end('Hello, world!')
  if (req.url ==='/about') res.end('This is the about page')

  res.end('This page does not exist')
})

server.listen(5000)