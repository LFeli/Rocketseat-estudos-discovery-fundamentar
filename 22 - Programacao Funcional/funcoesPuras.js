// Função impura

// Exemplo 1
// Está função e impura pois está dependendo de um dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
}

// Exemplo 2
let person = {
    name: 'rafael',
    age: '18'
}

function changeName(name){
    person.name = name
}

// Função pura

// Exemplo 1
const calculateCircumferencePure = function (pi, radius){
    return pi * (radius + radius)
} 

// com arrow function
const calculateCircumferencePureV2 = (pi, radius) =>
    pi * (radius + radius)


// Exemplo 2
const   changePersonName = (person, name) =>
    ({...person, name})
