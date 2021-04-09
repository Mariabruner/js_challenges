// let result3 = [1, 2, 3]
//     .map((x) => x * x)
//     .reduce((totalVal, curValue) => totalVal += curValue, 0)
 
// console.log(results)

// let sqr = (x) => {
//     return x*x
// }

// //                   V--- This is a function obj
// let callbackUser = (cb) => {
//     cb() // calling the function
// }

// callbackUser(console.log)

// let x = []
// console.log(x)


function myMap(cb, iter) {
    for(let item of iter){
        cb(item)
    }
}
myMap(console.log, [1, 2, 3])


//Challenge, make filter

function myFilter(cb, iter){
    let retArr = []
   for (let item of iter){
        if(cb(item)){
            retArr.push(item)
        }
   }
   return retArr = []
}

// Reduce [1, 2, 3].reduce => 6 if the cb totaled two numbers

testArr = [1, 2, 3]

console.log(testArr.reduce((acc, x) => acc + x, 0))

function myReduce(cb, iter){
    let total = 0
    for (let item of iter){
        total = cb(total, item)
    }
    return total
}

console.log(myReduce((acc, x) => acc + x, [1, 2, 3]))

