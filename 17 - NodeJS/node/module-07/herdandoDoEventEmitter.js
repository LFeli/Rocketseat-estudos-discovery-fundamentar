const { EventEmitter } = require('stream');
const { inherits } = require('util');

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character('chapolin')
chapolin.on('help', () => {
    console.log(`Eu o ${chapolin.name} colorado!`);
})

console.log('Oh e agora, quem poderá me defender ?');
chapolin.emit('help');