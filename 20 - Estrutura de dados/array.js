const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton'];

console.log(pilotos[0]);
console.log(pilotos.length);

for (let piloto of pilotos){
    console.log(piloto);
}

const Senna = pilotos.find(piloto => piloto === 'Senna')
console.log('\n' + Senna);

pilotos.splice(1,1)
console.log(pilotos);
