import { setUser, setUserData } from "../../global/state/globalState";
import { initControler } from "../../utils/route";
import "./Login.css";
const template = () => `
  <div id="containerLogin">
    <h1 id="titleLogin">LOGIN</h1>
    <input type="text" name="username" id="username" placeHolder="Ana"/>
    <button id="buttonLogin">entrar</button>
  </div>
`;

const addListeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  const username = document.getElementById("username");
  buttonLogin.addEventListener("click", (e) => {
    const valueInput = username.value;
    const userToLocalStorage = {
      token: true,
      name: valueInput,
      fav: [],
    };

    //condicional para guardar la informacion aunque te salgas de la pagina

    if (localStorage.getItem(`${valueInput}USER`)) {
      const localUser = localStorage.getItem(`${valueInput}USER`);
      const parseUser = JSON.parse(localUser);
      parseUser.token = true;

      const stringUser = JSON.stringify(parseUser);
      localStorage.setItem(`${valueInput}USER`, stringUser);
      sessionStorage.setItem("currentUser", `${valueInput}USER`);
      setUser(`${valueInput}USER`);

      setUserData(parseUser);
    } else {
      const customUser = {
        name: username.value,
        fav: [],
        token: true,
      };
      const stringUser = JSON.stringify(customUser);
      localStorage.setItem(`${valueInput}USER`, stringUser);
      sessionStorage.setItem("currentUser", `${valueInput}USER`);
      setUser(`${valueInput}USER`);
      setUserData(customUser);
    }

    initControler();
  });
};

export const Login = () => {
  document.querySelector("nav").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};
