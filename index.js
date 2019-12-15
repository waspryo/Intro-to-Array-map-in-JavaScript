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
