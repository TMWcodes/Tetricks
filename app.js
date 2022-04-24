// var - function + global scoped
// let - block scoped
// const - block scoped constant

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

    //tetrominoes 2d Array
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1,width+2, width*2+2],
        [1, width+1,width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]
    
})

//INDEX explained:
// width = 10
// [1, width+1, width*2+1, 2]

// after factoring in width:
// =[01, 11, 21, 02]

// taking those numbers as x and y values:
// =[(0, 1), (1, 1), (2, 1), (0, 2)
// ]

// the x and y values indicate which box to colour.

// hope this helps.
// [0,0]  [0,1]  [0,2]
// [1,0]  [1,1]  [1,2]
// [2,0]  [2,1]  [2,2]




