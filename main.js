//Kata 1

function add(x, y) {
    return x + y
}
console.log(add(8, 5))

//Kata 2
//a loop of some kind to add a number together a certain number of times

function multiply(x, y) {
    let total = 0
    for (let index =0; index < y; index +=1){
        total = add(x, total)
    }
    return total
}
console.log(multiply(8, 5))

//Kata 3
// Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.

// You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.

function power(x, y) {
    let total = 1
    for (let index =0; index < y; index +=1) {
        total = multiply(x, total)
    }
    return total
}
console.log(power(3, 4))

// Katas 4

//  Write a function named "factorial" which takes a single argument and returns the factorial of that value.
// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.

// A factorial multiplies a given number by every number below it

function factorial(x){
    let total = 1
    for (let index = x; index > 1 ; index -=1){
        total = multiply(index, total)
    }
    return total
}
console.log(factorial(5))

