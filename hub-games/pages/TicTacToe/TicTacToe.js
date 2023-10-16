import "./TicTacToe.css"



const template = () => `
    <div class="tictactoe">
    
    
    </div>



`

let winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const board = () =>{
    for (let i=0; i<9; i++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.id = i
        document.querySelector(".tictactoe").append(square)
    }
}

let play = "o"

const selectSquare = () =>{
    const squares = document.querySelectorAll(".square")
    squares.forEach(square =>{
        square.addEventListener("click", e =>{
            square.innerHTML = "" 
            const printPlay = document.createElement("div")
            printPlay.classList.add(play)
            e.target.append(printPlay)
            play == "o" ? play = "x" : play = "o"
            const printX = document.querySelector(".x")
            printX.textContent = "x"
             const printO = document.querySelector(".o")
            printO.textContent = "o"
    
            // if (){
        //   square.innerHTML = ""                                // lo borra cada vez q le doy para q solo pueda salir uno
        //   const printX = document.createElement("div")
        //   printX.textContent= "X"
        //   printX.classList.add("X")
        //   square.append(printX) 
        //  if (e.target.innerHTML == "<div class='X'>X</div>"){
        //     console.log("hola")
        //  }
          console.log(e.target)
            // }
        })
    })
}

const printX = document.querySelectorAll("x")
printX.textContent = "x"

const printO = document.querySelectorAll("o")
printO.textContent = "o"

// document.querySelector("o").textContent = "o"
// document.querySelector("x").textContent = "x"



export const printTicTacToePage = () =>{
    document.querySelector("main").innerHTML = template()
    board()
    selectSquare()
}