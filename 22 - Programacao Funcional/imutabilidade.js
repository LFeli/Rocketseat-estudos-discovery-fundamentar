const cart = {
    quantity: 2,
    total: 200
}

// bad 👎
cart.quantity = 3

// good 👌
const newCart = {...cart, quantity: 3}

// Exemplos em react
const [amount, setAumount] = useStates(0)

// bad 👎
amount = 2

// good 👌
setAumount(2)