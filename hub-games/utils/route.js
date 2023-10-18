import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages";
import { printMemoryPage } from "../pages/Memory/Memory.js";
import { printMolePage } from "../pages/Mole/Mole.js";


//! ----------------------------------------------------------------------------------------------------------------------
//? ------------------------------------- CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO------------------------------
//! ----------------------------------------------------------------------------------------------------------------------

export const initControler = (pagesRender) => {
  console.log("soy el user", getUser().name);
  switch (pagesRender) {          // switch para meterse en segun que app segun donde se cliquee
    case undefined:               // si no haces nada (undefined)
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login(); //getItem es un metodo que devuelve el valor asociado
      break;                        //ha cogido el usuario? printea el dashboard (donde eliges el juego), si no login
    case "Pokemon":                  
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Mole":
      printMolePage();
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      printMemoryPage();
      break;
  }
};
