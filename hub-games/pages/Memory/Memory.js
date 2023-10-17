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
<h3> Errores: <span id="errors">0</span></h3>
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

// // console.log(valuesCardList[1])

// // console.log(keysCardList)   
// // console.log(valuesCardList)  

let deck 

const shuffleDeck = () =>{
deck = keysCardList.concat(keysCardList)
                                                 // 20 tipos 
    for (let i=0; i< deck.length; i++){
        let j = Math.floor(Math.random() * deck.length)

        let deckChange = deck[i]
        deck[i] = deck[j]
        deck[j] = deckChange
    }
    console.log(deck)
    startGame()
}


const startGame = () => {

deck.forEach((item, index)=>{
  
  let card = `
  <figure class="card">
  <img src=${cardList[item]} class="${item} front-image">
  <img src=${"https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png"} id=${item} class="back-image">
  </figure>
  `
  document.getElementById("board").innerHTML +=card

})
}

const flip = () =>{
    let cardsFlipped = []
    const backCards = document.querySelectorAll(".back-image")
         backCards.forEach(card =>{
            card.addEventListener("click", e =>{
             card.classList.add('oculto')
             const cardClicked = e.target.id
             cardsFlipped.push(cardClicked)
                console.log(cardsFlipped)

                        setTimeout(() =>{
                            card.classList.remove('oculto')
                            cardsFlipped = []
                    }, 2000)

        cardsFlipped.forEach(type =>{
            console.log(type)
            cardsFlipped.indexOf(type) !== cardsFlipped.lastIndexOf(type) ?  card.classList.add('oculto') : console.log("no funciona")
        })
         })
            })
}


// const backCard = () =>{
//     let backCards = document.querySelectorAll("card")
//     backCards.forEach(card =>{
//         card.src = "https://res.cloudinary.com/daxddugwt/image/upload/v1697461474/IMG_4566_qhfik5.png"
//     })

// }







export const printMemoryPage = () =>{
    document.querySelector("main").innerHTML = template()
    shuffleDeck()
     flip()
}