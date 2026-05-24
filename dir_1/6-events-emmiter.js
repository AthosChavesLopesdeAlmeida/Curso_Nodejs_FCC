const EventEmitter = require('events')
const customEmmiter = new EventEmitter()

// One event can have as many functions as I wish
customEmmiter.on('response', (name, surname) => {
  console.log(`FIRST MESSAGE: Our Lord and savior is ${name} ${surname}`)
})

customEmmiter.on('response', () => {
  console.log(`SECOND MESSAGE: He died for our sins and came back to life on the third day`)
})

// The order matters: first listen, then emit
customEmmiter.emit('response', 'Jesus', 'Christ')

// customEmmiter.emit('response')