import { getData } from "../../global/state/globalState";
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
  <h1 class="start">START GAME</H1>
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img class="dashboardimg" id="pokeball"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697548361/Untitled_Artwork_15-removebg-preview_fmqnhz.png"
            alt="go to page pokemon"
          />
          <h2>POKEDEX</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateMole">
          <img class="dashboardimg" id="mole"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697548009/Dugtrio-Pokemon-PNG-File_t09hk2.png"
            alt=" go to mole game"
          />
          <h2>WHACK-A-MOLE</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateMemory">
          <img class="dashboardimg" id="figure-memory"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1697548508/IMG_4566-removebg-preview_whhrxa.png"
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

  const navigateTicTacToe = document.getElementById("navigateMole")
  navigateTicTacToe.addEventListener("click", e =>{
    initControler("Mole")
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
