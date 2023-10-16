import { getData } from "../../global/state/globalState";
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
  <h1 class="start">START GAME</H1>
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img class="dashboardimg"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697276300/Untitled_Artwork_15_zxveds.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTicTacToe">
          <img class="dashboardimg"
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761641/pngwing.com_1_iq8zfk.png"
            alt=" go to wacka topo game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateMemory">
          <img class="dashboardimg" id="figure-memory"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697315767/pokemon_card_pixel_art_gif_wcispv.jpg"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {             //evento si clikeas en pokemon
  const navigatePokemon = document.getElementById("navigatePokemon");     //coge el id del figure
  navigatePokemon.addEventListener("click", () => {         //si clicas en el figure
    initControler("Pokemon");                     //inicia la funcion initControler con pokemon
  });
  const navigateMemory = document.getElementById("navigateMemory")
navigateMemory.addEventListener("click", e => {
  initControler("Memory")
})

  const navigateTicTacToe = document.getElementById("navigateTicTacToe")
  navigateTicTacToe.addEventListener("click", e =>{
    initControler("TicTacToe")
  })
};


  //habria que hacer una addEventListener para cada uno de los juegos asociados a una figure

  //figure =/= img

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();    //añade este template al html SOLO si estamos en dashboard
  document.querySelector("nav").style.display = "flex";
  addEventListeners();                                      //aqui habria que meter mas funciones de eventos segun el juego
  console.log(getData());
  getInfo();                  //lo tengo en el dashboard para que vaya mas rapido el fetch
};
