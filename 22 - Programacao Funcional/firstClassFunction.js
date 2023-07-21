const sayMyName = () => console.log('lucas');
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discovery'))

console.log(runFunction(Math.random));