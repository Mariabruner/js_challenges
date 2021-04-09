
let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott"
]

// Console.log a sub array containing only "J" names
console.log(start.filter(item => item.startsWith('J')))

// Find the average of all the students grades

let students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    },
    {
        name: "Zach",
        grade: 2.1
    }
]


let total = 0;
for (let student of students){
    total += student.grade
}
let average = total / students.length
console.log(average)

//