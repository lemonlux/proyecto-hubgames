import "./Memory.css"


const template = () =>
`
<div class="memory-game">
<div class="feedback-memory">
<h3> ACIERTOS: <span id="aciertos"></span></h3>
</div>
    <div class="game-container">
        <div id="board">
        </div>
    </div>
</div>

`


let cardList = {
    grass: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461476/IMG_4565_awl5qy.png",
    electric: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461475/IMG_4561_kykxva.png",
    water: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4557_yb7pyl.png",
    fire: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4556_fjxsyi.png",
    psychic: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4559_yy16ve.png",
    normal: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4560_kcm4l9.png",
    dragon: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4558_bjqbfk.png",
    poison: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4562_ksnmhk.png",
    magic: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4554_jkri6n.png",
    ice: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461469/IMG_4555_knqwpc.png"
}

const keysCardList = Object.keys(cardList) // array de tipos
const valuesCardList = Object.values(cardList) // las url de las imagenes

let deck 

const shuffleDeck = () =>{     //para barajar todas las cartas
deck = keysCardList.concat(keysCardList)
                                                 // 20 tipos 
    for (let i=0; i< deck.length; i++){
        let j = Math.floor(Math.random() * deck.length)
        let deckChange = deck[i]
        deck[i] = deck[j]
        deck[j] = deckChange
    }
    console.log(deck)
    getDeck()
    flip()
}

const getDeck = () => {

deck.forEach((item, index)=>{   //el template
  
  let card = `
  <figure class="card">
  <img src=${cardList[item]} class="${item} front-image">
  <img src=${"https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png"} id=${item} class="back-image">
  </figure>
  `
  document.getElementById("board").innerHTML +=card

})
}

let score = 0

const playGame = () =>{
    aciertos = 0
    document.querySelector("#aciertos").textContent = aciertos


}


let firstCard, firstCardId
let secondCard, secondCardId

const flip = () =>{
  score = 0
    let cardsFlipped = []
    const backCards = document.querySelectorAll(".back-image")
         backCards.forEach(card =>{
            card.addEventListener("click", (e) => {
                let allFlipped = document.querySelectorAll(".flipped");
                if (allFlipped.length < 2) {
                  card.classList.add("oculto");
                  const cardClicked = e.target.id;
                  firstCard = card;
                  firstCardId = cardClicked;
                  cardsFlipped.push(firstCardId);
                  card.parentElement.classList.add("flipped");
                }
                allFlipped = document.querySelectorAll(".flipped");
                if (allFlipped.length === 2) {
                  if (
                    allFlipped[0].childNodes[1].src === allFlipped[1].childNodes[1].src
                  ) {
                    allFlipped[0].classList = "card win";
                    allFlipped[1].classList = "card win";
                    score += 1
                    document.getElementById("aciertos").innerText = score.toString()
                    if (score == 10){
                      endGame(score)
                    }
                  } else {
                    setTimeout(() => {
                      allFlipped[0].childNodes[3].classList.remove("oculto");
                      allFlipped[0].classList = "card";
                      allFlipped[1].childNodes[3].classList.remove("oculto");
                      allFlipped[1].classList = "card";
                    }, 500);
                  }
                }
        })
    })
    
}


const endGame = (score) =>{
  document.querySelector(".game-container").innerHTML= ""
  console.log("holaa", score)
    console.log("holaa", score)
    let winnerDiv = document.createElement("div")
   winnerDiv.classList.add("winner")
   winnerDiv.innerHTML = `
   <div class="winner-div"> 
   <h3>Has ganado! Quieres repetir?</h3>
   <button class="restart-memory">START GAME</button>
    </div>
   `
   document.querySelector(".game-container").append(winnerDiv)

   let restartButton = document.querySelector(".restart-memory")
   restartButton.addEventListener("click", e =>{
    document.querySelector("main").innerHTML= ""
    document.querySelector("main").innerHTML = template()
    shuffleDeck()

   })
  }




export const printMemoryPage = () =>{
    document.querySelector("main").innerHTML = template()
    shuffleDeck()
}
