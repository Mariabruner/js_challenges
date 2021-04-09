/*
for  a range o fnumbers (1..100):
    if the number is div evenly by:
    3->fizz
    5->buzz
    3 & 5->fizzbuzz
    otherwise -> number

    1. Bronze if solved with a for loop and if statements
    2. Silver if solve with while and switch
    3. Gold if solved with for loop and ternaries

*/

//bronze
for(let i=1; i<=100; i++){
    if (i%3===0 && i%5===0) console.log("fizzbuzz")
    else if (i%3 === 0) console.log("fizz")
    else if (i%5 === 0) console.log("buzz")
    else console.log(i)
}

//silver
let x = 1
while(x<=100){
    switch (true) {
        case x%15 == 0:
            console.log("fizzbuzz")
            break
        case x%3 == 0:
            console.log("fizz")
            break;
        case x%3 == 0:
            console.log("buzz")
            break
        default: 
            console.log(x)
    }
    x++
}

//gold

for(let z = 1; z <= 100; z++){
    (z%3===0 && z%5===0) ? console.log("fizzbuzz")
    : (z%3 === 0) ? console.log("fizz")
    : (z%5 === 0) ? console.log("buzz")
    : console.log(z)
}


