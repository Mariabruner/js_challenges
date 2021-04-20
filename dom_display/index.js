
function buttonFunction() {
    console.log('it works!')
}


const getAndDisplayFilms = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(json => {
        displayFilms(json)
        console.log(json)
    })
}

let button = document.getElementById('testing-button')
button.addEventListener("click", getAndDisplayFilms)

const displayFilms = (films) => {
    const div = document.getElementById('results')

    films.map((film) => {
        //This is grabbing the container
        const wrapper = document.getElementById("results")

        //This will do the code block for each film item
        for (let film of films){
            //creates 3 new tags
            let card = document.createElement('div')
            let card_header = document.createElement('div')
            let card_body = document.createElement('div')
            //gives each tag a class / innertext if needed
            card.className = "card"
            card_header.className = "card-header"
            card_body.className = "card-body"
            card_header.innerText = `${film.title} ${film.release_date}`
            card_body.innerText = film.description
    
            //Adding the inner divs to the card
            card.appendChild(card_header)
            card.appendChild(card_body)
            //Adding a card to the container / wrapper
            wrapper.appendChild(card)
        }

    }) 
}

//For reference - before adding bootstrap
// const displayFilms = (films) => {
//     const ul = document.getElementById('movie-list')

//     films.map((film) => {
//         let li = document.createElement('li')
//         li.innerText = `${film.title} ${film.release_date}`
//         ul.appendChild(li)
//     })
    
// }


