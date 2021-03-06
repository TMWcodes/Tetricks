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
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

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

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currentPosition = 4
  let currentRotation = 0
  //randomly select tetrominoes

  let random = Math.floor(Math.random()*theTetrominoes.length)
//   console.log(random)
  let current = theTetrominoes[random][currentRotation]
  
//   console.log(current)

//draw the first rotation in the first tetromino
function draw() {
    //for each item in array add a tetromino that would color the item which is a div inside the element with class name grid
    current.forEach(index => {
        //classlist.add to add the style of tetrominoes to the squares in the tetrominoes it is in
        squares[currentPosition + index].classList.add('tetromino')
    })
}

//undraw the tetromino

function undraw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino')
  })
}

timerId = setInterval(moveDown, 1000)

//undraw from current position and add a whole width then redraw.
function moveDown() {
  undraw()
  currentPosition += width
  draw()
  freeze()
}

//freeze function 
//if statement
function freeze() {
  if(current.some(index => squares[currentPosition + index 
  + width].classList.contains('taken'))) {
    current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    //start a new tetromino falling
    random = Math.floor(Math.random() * theTetrominoes.length)
    current = theTetrominoes[random][currentRotation]
    currentPosition = 4
    draw()
  }
}















})






