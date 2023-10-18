import "./Mole.css"


const template = () =>`
<div class="game">
<div class="feedback">
<h3 class="atrapalo">TIEMPO:<span id="time"></span></h3>
<h3>ACIERTOS:<span id="score"></span></h3>
</div>
<div class="mole-container"></div>
</div>

`
const counter = () =>{
    let n = 10
    let time = document.getElementById("time")
    if (n >= 10){
setInterval(()=>{
    time.innerHTML = n.toString()
    n--
}, 1000)
} else if (time.innerHTML == "0"){
    startGame()
    console.log("YAAA")
}
} 

let timeUp = false
let score = 0
let start = document.createElement("button")
start.textContent = "START GAME"
start.id = "start-button"

const startGame = () =>{
    timeUp = false
    score=0

    document.querySelector(".mole-container").append(start)
    start.addEventListener("click", e =>{
        // document.getElementById("time").append(counter)
             board()
            start.style.display = "none"
            counter()
         setTimeout(()=>{
            timeUp = true
            endGame()
            printMolePage()
         }, 11500)
    })
}

const board = () =>{
    for (let i=0; i<9; i++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.id = i
        const figureDiv = document.createElement("div")
        square.append(figureDiv)
        document.querySelector(".mole-container").append(square)
    }

    const moleTime = randomTime(600, 1000)
    setInterval(()=>{
        createMole()
    }, moleTime)
    whack()
}

// num aleatorio
const randomTime = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min)
 }
 
   // console.log(randomTime(800, 15000))

   const randomNum = () =>{
    const squares = document.querySelectorAll(".square")
    const random = Math.floor(Math.random() * squares.length)
    return random
}

let currentMoleSquare
let lastSquare
let mole

const createMole = () => {
    let okImagePrintScreen = document.getElementById("mole-game");
  
    mole = document.createElement("img");
    mole.src =
      "https://res.cloudinary.com/daxddugwt/image/upload/v1697558354/ce16eb9b-6c94-4f54-8007-289a65d13dc5-removebg-preview_cdh7ew.png";
    mole.alt = "topo";
    mole.id = "mole-game";
  
    let num = randomNum();
  
    // console.log(okImagePrintScreen);      //el topo no aparece dos veces por el mismo agujero
    if (okImagePrintScreen) {
      while (parseInt(okImagePrintScreen.parentNode.id) === num) {
        num = randomNum();
      }
    }
  
    if (currentMoleSquare) {     //borro el tablero 
      currentMoleSquare.innerHTML = "";
    }

    currentMoleSquare = document.getElementById(num);
    currentMoleSquare.append(mole);
    lastSquare = document.getElementById(num);
  };


const whack = () =>{
    score = 0
    const squares = document.querySelectorAll(".square")
    squares.forEach(square =>{
        square.addEventListener("click", e =>{
            // console.log(e.target)
            if (e.target == mole){
                // console.log("toma topo!!!")
                score += 1
                document.getElementById("score").innerText = score.toString()
              }
        })
  })
}



const endGame = () =>{
  if (timeUp){
   let winnerDiv = document.createElement("div")
   winnerDiv.classList.add("winner")
   winnerDiv.innerHTML = `
   <h3> Le has dado de lleno a <span class="winner-span">${score}</span> Diglets! </h3>
   `
   setTimeout(() => {
    start.style.display = "none"
    document.querySelector(".mole-container").append(winnerDiv)
    setTimeout(() => {
        console.log("hola")
        document.querySelector(".mole-container").innerHTML= ""
        printMolePage()
    }, 3000);
   }, 300);
   
}
}





// const moleShown = () =>{
//     const moleTime = randomTime(800, 15000)   // tiempo que asoma
//     let moleSquare 
//     const squareToBeShown = randomSquare(document.querySelectorAll(".square"))

//     setTimeout(()=>{
//         squareToBeShown.classList.add("seen")
//     }, moleTime)
// }



//querySelectorAll se comporta haciendo arrays----[]
// const squares = document.querySelectorAll(".square")
// const squaresLength = squares.length
// console.log(squaresLength)
// console.log("hola")



// const randomSquare = () =>{
//     const squares = document.querySelectorAll(".square")
//     const randomNum = Math.floor(Math.random() * squares.length)
//     const squareRandom = squares[randomNum]
//     // squareRandom --- si el topo ha salido la vez anterior por el mismo lao? pues hazlo otra vez
//     (squareRandom == lastSquare) && randomSquare(squares)   
//     lastSquare = squareRandom

//     return squareRandom
// }






// let aciertos = 0

// const playGame = () =>{
//     aciertos = 0        //empiezas con 0 aciertos
//     document.querySelector("#aciertos").textContent = aciertos
//     moleShown()       //se muestra el topillo

// }





export const printMolePage = () =>{
    document.querySelector("main").innerHTML = template()
    startGame()
    
}