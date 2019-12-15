const numbers = [12, 32, 150];

const doubled = numbers.map((number) => {
    return number * 2;
});
console.log(doubled);

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Fridayday',
    'Saturday'
]

const abreviated = days.map((day) => {
    return day.substring(0, 3);
})

console.log(abreviated)

const people = [{
    first_name: 'Cj',
    last_name: 'R.'
},{
    first_name: 'Wick',
    last_name: 'John.'
},{
    first_name: 'Sala',
    last_name: 'Coner.'
},{
    first_name: 'John',
    last_name: 'Coner.'
}]
const fullNames = people.map((person) => {
    return `${person.first_name} ${person.last_name}`
})
console.log(fullNames)

const animals = [{
    'name': 'cat',
    'size': 'small',
}, {
    'name': 'dog',
    'size': 'regular',
}, {
    'name': 'lion',
    'size': 'medium',
}, {
    'name': 'elephant',
    'size': 'big',
}]
const animalNames = animals.map((animal) => animal.name)
console.log(animalNames)