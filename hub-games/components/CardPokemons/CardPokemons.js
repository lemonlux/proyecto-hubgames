import { getUserData, setUserData } from "../../global/state/globalState";
import "./CardPokemons.css";

export const CardsPokemons = (data) => {
  const appUser = getUserData();

  console.log(appUser);
  
  document.getElementById("galleryPokemon").innerHTML = "";
  console.log(appUser);

  data.map((pokemon) => {          //esto es para printear el template de cada pokemon
    console.log(pokemon.id.toString());
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = ` 
    
    <figure class="pokemonfigure">
        <div class="pokemon-image">
          <img class="pokemon-imageFront" id=${pokemon.id} src=${pokemon.image} alt=${pokemon.name} />
          <img class="pokemon-imageBack" id=${pokemon.id} src=${pokemon.backImage} alt=${pokemon.name} />
        </div>
          <h3 class="${pokemon?.name}">${pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</h3>
          <div class="class-container">
                 <h4 class="${pokemon?.typeOne}" id="type-one">${pokemon?.typeOne.toUpperCase()}</h4>
                 <h4 class="${pokemon?.typeTwo}">${pokemon?.typeTwo.toUpperCase()}</h4>
          </div>
         <span class="material-symbols-outlined  ${
                 appUser.fav.includes(pokemon.id.toString()) ? "like" : ""
                      }"> favorite 
          </span>
    </figure>
    `
    ;
    document.getElementById("galleryPokemon").innerHTML += templateFigure;       
    addListeners(data);  
    // addListenerBack(data)                       // se mete debajo del template de pokemon
  });
};

// ------- todo eso era la funcion que printea las cartas



const addListeners = (data) => {
  const appUser = getUserData();
  const spanAll = document.querySelectorAll("span");     // el span es donde le da a like
  spanAll.forEach((span) => {
    span.addEventListener("click", (e) => {
      console.log("entro");

      if (appUser.fav.includes(e.target.parentNode.id)) {
        const appUser = getUserData();
        console.log(appUser);
        const newFavArray = [];

        appUser.fav.forEach((id) => {
          if (e.target.parentNode.id != id) newFavArray.push(id);
        });

        setUserData({
          ...appUser,
          fav: newFavArray,
        });

        span.classList.toggle("like");
      } else {
        const appUser = getUserData();
        appUser.fav.push(e.target.parentNode.id);
        setUserData(appUser);
        span.classList.toggle("like");
      }
    });
  });
};

// const imagesFunction = () =>{
// const pokemonImages = document.querySelectorAll(".pokemon-image")
// pokemonImages.forEach(image =>{
//   return image
// })
// }

// const addListenerBack = () =>{
//   const pokemonFigures = document.querySelectorAll(".pokemonfigure")
//   const pokemonId = document.querySelector(`${pokemon.id}`)
//   pokemonFigures.forEach((figure)=>{
//     figure.addEventListener("click", e =>{
//       pokemonId.removeAttribute("src")
//       console.log("entroooo")
//       })
//     })
//   }