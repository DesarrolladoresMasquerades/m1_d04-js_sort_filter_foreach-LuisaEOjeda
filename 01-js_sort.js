// Class code examples

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

console.log ("before:" , numbers)

numbers.sort()

console.log("after: " , numbers)

console.log (typeof numbers[0]) // Elements stay as numbers

// Array stays the same "box" though 
//the numbers dont have the same order, therefore this console logs TRUE
console.log(numbers === numbers.sort()) 

// passing the sorting criteria using parameter function
// Rules are that 2 elements will be given to your function and your functions
// your function must return -1, 0 or 1 according werther el1 is smaller equal or
// greater than el2

function sortMyNumbers (el1 ,el2){
    if(el1 < el2) return -1
    if(el1 === el2) return 0
    if(el1 > el2) return 1
}

const sortedNumbers = numbers.sort(sortMyNumbers)

console.log("sorted numbers : " , sortedNumbers)

function sortMyNumbersDec (el1 ,el2){
    if(el1 > el2) return -1
    if(el1 === el2) return 0
    if(el1 < el2) return 1
}

const sortedNumbersDec = numbers.sort(sortMyNumbersDec)

console.log("sorted number decrescent: " , sortedNumbersDec)

// this function does the same as the one above bur in a simpler way
function quickSort(el1, el2){
    return el1 - el2
}

console.log(numbers.sort(quickSort))

// sorting in an Array of objects

const students = [
	{firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Sarah', lastName: 'O\'Connor', age: 45}
]

function sortStudentByAge (std1, std2){
    if(std1.age< std2.age) return -1
    if(std1.age === std2.age) return 0
    if(std1.age > std2.age) return 1
}
console.log(students.sort(sortStudentByAge))

function sortStudentByAgeSimple (std1, std2){
    return parseInt(std1.age) - parseInt(std2.age)
}

console.log(students.sort(sortStudentByAgeSimple))