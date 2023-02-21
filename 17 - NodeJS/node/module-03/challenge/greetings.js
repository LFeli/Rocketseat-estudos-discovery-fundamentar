const getFlags = require('./flags');

console.log(`Oi ${getFlags('--name')}. ${getFlags('--greeting')}`);