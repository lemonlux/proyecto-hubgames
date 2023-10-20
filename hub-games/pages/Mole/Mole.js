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
    score=0

    document.querySelector(".mole-container").append(start)
    start.addEventListener("click", e =>{
        // document.getElementById("time").append(counter)
             if (!timeUp){
            board()
        }
            start.style.display = "none"
            counter()
         setTimeout(()=>{
            timeUp = true
            console.log("settimeout", timeUp)
            endGame()
            printMolePage()
         }, 11500)
    })
}

const board = () =>{
    console.log(timeUp)
    console.log("dentro board")
    for (let i=0; i<9; i++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.id = i
        const figureDiv = document.createElement("div")
        square.append(figureDiv)
        document.querySelector(".mole-container").append(square)
    }


        console.log("topilllooooooo", timeUp)
        const moleTime = randomTime(600, 1000)
        const moleInterval = () =>{
            setInterval(()=>{
            createMole()
        }, moleTime)
    }
    if (!timeUp){
        moleInterval()
        whack()
    } else {
        clearInterval(moleInterval)
    }

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
    if (timeUp){
        return
    }
    let okImagePrintScreen = document.getElementById("mole-game");
  
    mole = document.createElement("img");
    mole.src =
      "https://res.cloudinary.com/daxddugwt/image/upload/v1697558354/ce16eb9b-6c94-4f54-8007-289a65d13dc5-removebg-preview_cdh7ew.png";
    mole.alt = "topo";
    mole.id = "mole-game";
  
    let num = randomNum();

                                          //el topo no aparece dos veces por el mismo agujero
    if (okImagePrintScreen) {
      while (parseInt(okImagePrintScreen.parentNode.id) === num) {
        num = randomNum();
      }
    }
  
    if (currentMoleSquare) {     //borro el tablero 
      currentMoleSquare.innerHTML = "";
    }
    if (!timeUp){
    currentMoleSquare = document.getElementById(num);
    currentMoleSquare.append(mole);
    lastSquare = document.getElementById(num);
} else{
    endGame()
}
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
   <div class="winner-mole"> 
   <h3 class="h3-diglet"> Le has dado de lleno a <span class="winner-span">${score.toString()}</span> Diglets! </h3>
   <img src="https://res.cloudinary.com/daxddugwt/image/upload/v1697558354/ce16eb9b-6c94-4f54-8007-289a65d13dc5-removebg-preview_cdh7ew.png"
   alt="diglet" class="diglet-after"/>
    </div>
   `
   setTimeout(() => {
    document.querySelector(".mole-container").innerHTML = ""
    document.querySelector(".mole-container").append(winnerDiv)
   }, 300);
   
}
}




export const printMolePage = () =>{
    document.querySelector("main").innerHTML = template()
    startGame()
    
}