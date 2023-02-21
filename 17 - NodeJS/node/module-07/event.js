const { EventEmitter } = require('events');
const ev =  new EventEmitter();

ev.on('saySomething', (message) => {
    console.log('Eu ouvi você: ' + message);
})

ev.once('saySomething', (message) => {
    console.log('\n\nEu ouvi você: ' + message);
})

ev.emit('saySomething', 'Lucas');
ev.emit('saySomething', 'João');
ev.emit('saySomething', 'Gabriel');

