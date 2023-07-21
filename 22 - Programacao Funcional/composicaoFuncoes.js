const people = ['Rafa', 'Diego', 'Augusto']

const upperCasePeopleThatStartWithD = 
people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase)