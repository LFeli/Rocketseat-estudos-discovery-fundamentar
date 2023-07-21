const random = (number, Math) =>
Math.floor(Math.random() * number)

// recursividade
// Procurando o factorial do numero
const factorial = x => {
    if(x == 0){
        return 1;
    }

    return x * factorial(x - 1)
}