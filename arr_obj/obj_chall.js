

let house = {
    rooms: [
        {
            name: "bedroom",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        },
        {
            name: "bathroom",
            doors: 1,
            windows: 2,
            flooring: "tile",
            current_occupants: []
        },
        {
            name: "kitchen",
            doors: 0,
            windows: 3,
            flooring: "hardwood",
            current_occupants: []
        }
    ],
    people: [
        {
            name: "Justin",
            age: 28,
        },
        {
            name: "Tony",
            age: 8,
        }
    ]
}

//Challenge 1
//Print the word bathroom
console.log(house.rooms[1].name)

//Print all room names
console.log(house.rooms.map(room => room.name))

//move both people into the kitchen

house.rooms[2].current_occupants = house.people


console.log(house.rooms[2])