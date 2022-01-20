// Class code examples
const numbers = [1, 60, 112, 123, 100, 99, 73, 35, 22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18]

const filterEvenNumbers = function(el) {
if (el % 2 === 0) return true
else return false
}

const filterOddNumbers = function(el)
{
if (el % 2 !== 0) return true
else return false
}

const evenNumbers = numbers.filter(filterEvenNumbers)

const oddNumbers = numbers.filter(filterOddNumbers)

console.log(
    numbers,
    evenNumbers,
    oddNumbers
)

console.log (numbers === evenNumbers)

console.log(numbers === oddNumbers)

const lessHundred = function (number){
    return number < 100
}

const greatHundred = function (number){
    return number > 100
}

const numbersLessHundred = numbers.filter(lessHundred)
const numbersGreatHundred = numbers.filter(greatHundred)

const students = [
    {name: 'Rafa', color: 'Blue', age: 24},
    {name: 'Elise', color: 'Pink', age: 21},
    {name: 'Bodei', color: 'Yellow', age: 31},
    {name: 'Jorge', color: 'Red', age: 18}
]

const getOlderthan21 = function(student){
    return student.age >= 21
}

const drinkingStudents = students.filter(getOlderthan21)

const getPinkStudents = function(student) {
 return student.color.toLowerCase() === 'Pink'
}

const pinkStudents = students.filter(getPinkStudents)

console.log(pinkStudents, drinkingStudents)