import { getUser } from "../../global/state/globalState";
import { initControler } from "../../utils/route";
import "./Header.css";
import "./darkMode.css"

//! ------------------1) TEMPLATE -------------------------------------
                                  // template con logo, dashboard, colorchange y logout
const template = () => `         
    <div id="pokedex-logo">
        <img src="https://res.cloudinary.com/daxddugwt/image/upload/v1697564509/___6_-removebg-preview_rqushm.png" alt="logo" id="logo"/>
        <h1>POKEGAMES</h1>
    </div>
    <nav>
        <ul>
            <li class="linav" id="buttonDashboard">HOME</li>
            <li class="linav" id="buttonLogout">PROFILE</li>
            <li class="linav" id="changeColor">DARK MODE</li>
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
    document.body.classList.toggle('dark')
    changeColor.classList.toggle("active")
    changeColor.innerHTML == "DARK MODE" ? changeColor.innerHTML = "LIGHT MODE" : changeColor.innerHTML = "DARK MODE"
  })


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
}

//! ------------------------------ 3) La funcion que se exporta y que pinta
export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
