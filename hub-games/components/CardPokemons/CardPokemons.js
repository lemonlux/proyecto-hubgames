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
    
    <figure id=${pokemon.id}>
          <img src=${pokemon.image} alt=${pokemon.name} />
          <h3 class="${pokemon?.name}">${pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</h3>
          <div class="class-container">
                 <h4 class="${pokemon?.typeOne}">${pokemon?.typeOne.toUpperCase()}</h4>
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
    addListeners(data);                         // se mete debajo del template de pokemon
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
        console.log(
          "🚀 ~ file: CardPokemons.js:38 ~ span.addEventListener ~ appUser:",
          appUser
        );
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
