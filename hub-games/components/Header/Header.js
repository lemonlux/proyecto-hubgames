import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

//! ------------------1) TEMPLATE -------------------------------------
                                  // template con logo, dashboard, colorchange y logout
const template = () => `         
    <div id="pokedex-logo">
        <img src="https://res.cloudinary.com/daxddugwt/image/upload/v1696760751/jgsl4y6xcbllsxzx4z7l.png" alt="logo" id="logo"/>
        <h1>POKEGAMES</h1>
    </div>
    <nav>
        <ul>
            <li class="linav" id="buttonDashboard">HOME</li>
            <li class="linav" id="buttonLogout">PROFILE</li>
            <li class="linav" id="changeColor">NIGHT MODE</li>
        </ul>
</nav>
 
`;

//! ----------------------- 2 ) Añadir los eventos con sus escuchadores

//- todos los eventos en una misma funcion
                                          //evento al hacer clic que nos lleva a la funcion changeColorRGB - utils
const addListeners = () => {
  // evento click del boton de cambio de color
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    // const color = changeColorRGB();
    if (document.body.style.background == "white"){
      document.body.style.background = "black"
    }
  });

  // evento click del boton que nos lleva a los juegos
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    initControler("Dashboard");
  });

  // evento del logout
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};

//! ------------------------------ 3) La funcion que se exporta y que pinta
export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
