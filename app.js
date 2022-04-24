document.addEventListener('DOMContentLoaded', () => {
    //query selector to look through html for element with class(.) name of div
    const grid = document.querySelector('.grid')
    //collect all the divs in the element with class name of grid and turn them into an array.
    let squares = Array.from(document.querySelectorAll('.grid div'))
    //grab ID(#) for span tag and start button
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    //tell javascript the width, const for unchanging value.
    const width = 10

    console.log(squares)
})

// var - function + global scoped
// let - block scoped
// const - block scoped constant
