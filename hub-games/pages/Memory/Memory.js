import "./Memory.css"

const template = () =>`
<div class="memory-game">
  <div class="game-container">
    <div id="board">
      <div id="board">
        <figure class="card dragon">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4558_bjqbfk.png"
            alt="pokemon tipo dragon"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card normal">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4560_kcm4l9.png"
            alt="pokemon tipo normal"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card ice">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461469/IMG_4555_knqwpc.png"
            alt="pokemon tipo hielo"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card grass">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461476/IMG_4565_awl5qy.png"
            alt="pokemon tipo hierba"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card magic">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4554_jkri6n.png"
            alt="pokemon tipo magico"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card electric">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461475/IMG_4561_kykxva.png"
            alt="pokemon tipo electrico"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card fire">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4556_fjxsyi.png"
            alt="pokemon tipo fuego"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card psychic">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4559_yy16ve.png"
            alt="pokemon tipo psíquico"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card poison">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4562_ksnmhk.png"
            alt="pokemon tipo veneno"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card water">
          <img
            class="front-image"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4557_yb7pyl.png"
            alt="pokemon tipo agua"
          />
          <img class="back-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
        </figure>
        <figure class="card dragon">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4558_bjqbfk.png"
          alt="pokemon tipo dragon"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card normal">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4560_kcm4l9.png"
          alt="pokemon tipo normal"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card ice">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461469/IMG_4555_knqwpc.png"
          alt="pokemon tipo hielo"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card grass">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461476/IMG_4565_awl5qy.png"
          alt="pokemon tipo hierba"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card magic">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4554_jkri6n.png"
          alt="pokemon tipo magico"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card electric">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461475/IMG_4561_kykxva.png"
          alt="pokemon tipo electrico"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card fire">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4556_fjxsyi.png"
          alt="pokemon tipo fuego"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card psychic">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4559_yy16ve.png"
          alt="pokemon tipo psíquico"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card poison">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4562_ksnmhk.png"
          alt="pokemon tipo veneno"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      <figure class="card water">
        <img
          class="front-image"
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4557_yb7pyl.png"
          alt="pokemon tipo agua"
        />
        <img class="back-image"
        src="https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png" alt="back imagen">
      </figure>
      </div>
    </div>
  </div>
</div>

`















// `
// <div class="memory-game">
// <h3> Errores: <span id="errors">0</span></h3>
//     <div class="game-container">
//         <div id="board">
//         </div>
//     </div>
// </div>

// `


// let cardList = {
//     grass: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461476/IMG_4565_awl5qy.png",
//     electric: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461475/IMG_4561_kykxva.png",
//     water: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4557_yb7pyl.png",
//     fire: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4556_fjxsyi.png",
//     psychic: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4559_yy16ve.png",
//     normal: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4560_kcm4l9.png",
//     dragon: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4558_bjqbfk.png",
//     poison: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4562_ksnmhk.png",
//     magic: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4554_jkri6n.png",
//     ice: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461469/IMG_4555_knqwpc.png"
// }

// const keysCardList = Object.keys(cardList) // array de tipos
// const valuesCardList = Object.values(cardList) // las url de las imagenes

// // console.log(valuesCardList[1])

// // console.log(keysCardList)   
// // console.log(valuesCardList)  

// let deck 

// const shuffleDeck = () =>{
// deck = keysCardList.concat(keysCardList)
// console.log(deck)    // 20 tipos 
//     for (let i=0; i< deck.length; i++){
//         let j = Math.floor(Math.random() * deck.length)

//         let deckChange = deck[i]
//         deck[i] = deck[j]
//         deck[j] = deckChange
//     }
//     console.log(deck)
// }


// const startGame = () => {
//                                         // montar el tablero de 20 img
//     let rows = 4
//     let columns = 5
//     let board = []
//     for (let r = 0; r < rows; r++) {
//         let row = [];
//         for (let c = 0; c < columns; c++) {
//             let cardImg = deck.pop();       //me muestra el elemento eliminado --- el último del array
//             row.push(cardImg); 
//             // console.log(cardImg)
//             // let divCardContainer = document.createElement("div")
//             let card = document.createElement("img");
//             card.classList.add("card")
//                                         //necesito un url diferente segun la carta --- switctch?
//        switch (cardImg){
//             case "grass":
//                 card.src = valuesCardList[0]
//                 card.classList.add("grass")
//             break;
//             case "electric":
//                 card.src = valuesCardList[1]
//                 card.classList.add("electric")
//              break;
//              case "water":
//                 card.src = valuesCardList[2]
//                 card.classList.add("water")
//              break;
//              case "fire":
//                 card.src = valuesCardList[3]
//                 card.classList.add("fire")
//              break;
//              case "psychic":
//                 card.src = valuesCardList[4]
//                 card.classList.add("psychic")
//              break;
//              case "normal":
//                 card.src = valuesCardList[5]
//                 card.classList.add("normal")
//              break;
//              case "dragon":
//                 card.src = valuesCardList[6]
//                 card.classList.add("dragon")
//              break;
//              case "poison":
//                 card.src = valuesCardList[7]
//                 card.classList.add("poison")
//              break;
//              case "magic":
//                 card.src = valuesCardList[8]
//                 card.classList.add("magic")
//              break;
//              case "ice":
//                 card.src = valuesCardList[9]
//                 card.classList.add("ice")
//              break;
//        }
//            document.getElementById("board").append(card)
            

//         }
//   board.push(row);
//     }
// console.log(board);
// }


// const backCard = () =>{
//     let backCards = document.querySelectorAll("card")
//     backCards.forEach(card =>{
//         card.src = "https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png"
//     })

// }







export const printMemoryPage = () =>{
    document.querySelector("main").innerHTML = template()
    shuffleDeck()
    startGame()
    backCard()
}