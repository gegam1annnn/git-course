// Function Declaration
// function greet (name) {
//     console.log('Hello - ', name)
// }

// // Function Expression
// const greet2 = function (name) {
//     console.log('2 Hello - ', name)
// }

// greet('Svetlana')
// greet2('Svetlana')

// console.dir(greet)

// setTimeout(function () {
//     greet('Svetlana2')
// }, 1500)

// let counter = 0
// const interval = setInterval(function () {
//     // if(counter ===5){
//     //     clearInterval(interval)
//     // } else{
//     //     console.log(++counter)
//     // }
//     console.log(++counter)
// }, 1000)

// Arrow functions
function greet (name) {
    console.log('Hello - ', name)
}

const arrow = (name) => {
    console.log('Hello -', name)
}

const arrow2 = (name) => console.log('Hello -', name)

function pow(num, exp) {
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow2(2, 3))

// ======= Default Parameters
const sum = (a = 40, b = a / 2) => a + b

// console.log(sum(40, 2))
// console.log(sum())

function sumAll(... numbers) {
    // let res = 0
    // for(let num of numbers) {
    //     res += num
    // }
    // return res
    return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7))

// Closures

function createPerson (name) {
    return function(lastName) {
        console.log(name + ' ' + lastName)
    }
}

const addLastName = createPerson('Svetlana')
addLastName('Geghamyan')
addLastName('Abrahamyan')


