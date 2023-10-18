import "./Memory.css"

// const template = () =>`
// <div class="memory-game">
//   <div class="game-container">
//       <div id="board">
//         <figure class="card dragon">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4558_bjqbfk.png"
//             alt="pokemon tipo dragon"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card normal">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4560_kcm4l9.png"
//             alt="pokemon tipo normal"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card ice">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461469/IMG_4555_knqwpc.png"
//             alt="pokemon tipo hielo"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card grass">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461476/IMG_4565_awl5qy.png"
//             alt="pokemon tipo hierba"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card magic">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4554_jkri6n.png"
//             alt="pokemon tipo magico"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card electric">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461475/IMG_4561_kykxva.png"
//             alt="pokemon tipo electrico"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card fire">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4556_fjxsyi.png"
//             alt="pokemon tipo fuego"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card psychic">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4559_yy16ve.png"
//             alt="pokemon tipo psíquico"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card poison">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4562_ksnmhk.png"
//             alt="pokemon tipo veneno"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card water">
//           <img
//             class="front-image"
//             src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4557_yb7pyl.png"
//             alt="pokemon tipo agua"
//           />
//           <img class="back-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//         </figure>
//         <figure class="card dragon">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4558_bjqbfk.png"
//           alt="pokemon tipo dragon"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card normal">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4560_kcm4l9.png"
//           alt="pokemon tipo normal"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card ice">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461469/IMG_4555_knqwpc.png"
//           alt="pokemon tipo hielo"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card grass">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461476/IMG_4565_awl5qy.png"
//           alt="pokemon tipo hierba"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card magic">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4554_jkri6n.png"
//           alt="pokemon tipo magico"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card electric">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461475/IMG_4561_kykxva.png"
//           alt="pokemon tipo electrico"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card fire">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4556_fjxsyi.png"
//           alt="pokemon tipo fuego"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card psychic">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4559_yy16ve.png"
//           alt="pokemon tipo psíquico"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card poison">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4562_ksnmhk.png"
//           alt="pokemon tipo veneno"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       <figure class="card water">
//         <img
//           class="front-image"
//           src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4557_yb7pyl.png"
//           alt="pokemon tipo agua"
//         />
//         <img class="back-image"
//         src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
//       </figure>
//       </div>
//   </div>
// </div>

// `



// const flip = () =>{
//     const cards = document.querySelectorAll(".back-image")
//     cards.forEach(card =>{
//         card.addEventListener("click", e =>{
//             card.classList.toggle('oculto')
//             e.target.classList 
//             setTimeout(() =>{
//                 card.classList.remove('oculto')
//             }, 2000)
//         })
//     })
// }




// const board = document.getElementById("board")



// const shuffleDeck = () =>{
//     const allCards = document.querySelectorAll(".front-image")
//     allCards.forEach(card =>{
//         let deckShuffle = Math.floor(Math.random() * allCards.length)
//         card.style.order = deckShuffle
    
//         console.log(deckShuffle)
// })
// }

// const cardMap = cards.map((card) =>{

// })









const template = () =>
`
<div class="memory-game">
<div class="feedback-memory">
<h3> Aciertos <span id="aciertos"></span></h3>
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

let aciertos = 0

const playGame = () =>{
    aciertos = 0
    document.querySelector("#aciertos").textContent = aciertos


}


let firstCard, firstCardId
let secondCard, secondCardId

const flip = () =>{
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


export const printMemoryPage = () =>{
    document.querySelector("main").innerHTML = template()
    shuffleDeck()
}






            //    if (firstCardId == secondCardId){
            //     console.log("oleee")
            //         firstCard.classList.add("oculto")
            //         secondCard.classList.add("oculto")
            //         // cardsFlipped = []
            //    } else if (firstCardId !== secondCardId){
            //         setTimeout(() =>{
            //         firstCard.classList.remove("oculto")
            //         secondCard.classList.remove("oculto")
            //         })
            //    }
            //    secondCard = card
            //    secondCardId = cardClicked     
              
                //      cardsFlipped = []
                //  }
            
                //  if (cardsFlipped.length > 2){
                //      cardsFlipped = []
                //  } else if (cardsFlipped[0] == cardsFlipped[1]){
                //     console.log("oleee")
                //     cardsFlipped = []
                // } else if (cardsFlipped[0] !== cardsFlipped[1]){
                //     setTimeout(() =>{
                //     card.classList.remove('oculto')
                //     cardsFlipped = []
                // }, 1000)
                // } else if (cardsFlipped.length == 1){
                //     setTimeout(() =>{
                //         card.classList.remove('oculto')
                //         cardsFlipped = []
                //     }, 1000)
                // }
                
            // card.style.display = "none"
            //  console.log(cardsFlipped[0])
                //         setTimeout(() =>{
                //             // card.classList.remove('oculto')
                //             cardsFlipped = []
                //     }, 2000)

