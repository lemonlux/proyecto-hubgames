import { getData } from "../../global/state/globalState";
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761641/pngwing.com_1_iq8zfk.png"
            alt=" go to wacka topo game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
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
};

  //habria que hacer una addEventListener para cada uno de los juegos asociados a una figure

  //figure =/= img

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();    //añade este template al html SOLO si estamos en dashboard
  document.querySelector("nav").style.display = "flex";
  addEventListeners();                                      //aqui habria que meter mas funciones de eventos segun el juego
  console.log(getData());
  getInfo();                  //no haria falta porque ya la llamamos en el main
};
