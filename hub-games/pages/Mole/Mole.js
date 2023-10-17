import "./Mole.css"


const template = () =>`

<div class="mole-container"></div
`


const board = () =>{
    for (let i=0; i<6; i++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.id = i
        const figureDiv = document.createElement("div")
        square.append(figureDiv)
        document.querySelector(".mole-container").append(square)
    }
}

// num aleatorio
const randomTime = (min, max) =>{
   return Math.floor(Math.random() * (max - min + 1) + min)
}

  // console.log(randomTime(800, 15000))


const moleShown = () =>{
    const moleTime = randomTime(800, 15000)   // tiempo que asoma
    let moleSquare 
    const square = randomSquare(document.querySelectorAll(".square"))

    setTimeout(()=>{
        square.classList.add("seen")
    }, moleTime)

}

//querySelectorAll se comporta haciendo arrays----[]
// const squares = document.querySelectorAll(".square")
// const squaresLength = squares.length
// console.log(squaresLength)
// console.log("hola")


let lastSquare

const randomSquare = () =>{
    const squares = document.querySelectorAll(".square")
    const randomNum = Math.floor(Math.random() * squares.length)
    const squareRandom = document.querySelectorAll(".square")[randomNum]
    // squareRandom --- si el topo ha salido la vez anterior por el mismo lao? pues hazlo otra vez
    squareRandom == lastSquare && randomSquare(document.querySelectorAll(".square"))   
    lastSquare = squareRandom

    return squareRandom
}







export const printMolePage = () =>{
    document.querySelector("main").innerHTML = template()
    board()
    randomSquare()
}