const http = require('http')
const server = http.createServer()

// Built-in modules for events such as this one: More research on nodejs documentation (event:'request')
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)