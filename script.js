// addition
function addition(a, b) {
    return a + b;
}
console.log(addition(6, 9))

// substration
function substration(c, d) {
    return c - d;
}
console.log(substration(10, 5))


// multiplication
function multiplication(e, f) {
    return e * f;
}
console.log(multiplication(3, 9))
// we can write the same function expression
const multiplication1 = function(e,f){
    return e * f;
}
console.log(multiplication1(10,8 )) 

// or arrow function
const multiplication2 = (e,f) => e*f;
console.log(multiplication2(6,9))


// division
function division(g, h) {
    return g / h;
}
console.log(division(20, 5))

// persentDivision
function persentDivision(i, j) {
    return i % j;
}
console.log(persentDivision(8, 3))

// increment
function increment(k) {
    return k + 1;
}
console.log(increment(10))


// decrement
function decrement(l) {
    return l - 1;
}
console.log(decrement(12))

// type
function type(m) {
    return typeof m;
}
console.log(type(true))  // if enter number-number or text-string


// different
function different(a, b) {
    if (typeof a != typeof b) {
        return "parameter types are different"
    } else {
        return 'Success'
    }
}
console.log(different(8, "string"))


// if it has value
function hasValue (a=10, b){
    if(b){
        console.log(a+b)
    }else{
        console.log(a**2)
    }
}
hasValue(20)


// objecktKey
function objectKey(a, b) {
    return a[b]
}
console.log(objectKey({ name: 5 }, "name"))


//-------------------------------problem to calculate age-------------------------------//
// Aram and Ashot are friends. Ashot is ten years old and Aram is 3 times older than Ashot.
// How old will Aram be when Ashot turns 40?

function calculateAge (year){
    let ashotYear = 10;
    let aramYear = ashotYear * 3;
    
    let after40Year = year-ashotYear;
    let after40YearAram = aramYear + after40Year;
    return(after40YearAram)    
}
console.log(calculateAge(40))




// fibonacci
function fib(n) {
    if (n < 2) {
        return n;
    }
    let next = 1;
    prev = 0;
    for (let i = 2; i <= n; i++) {
        let temp = next + prev;
        prev = next;
        next = temp;
    }
    return next;
}
alert('Strated');
alert(fib(100)) // enter your number



