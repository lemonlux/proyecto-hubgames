import "./style.css";
import { getInfo, hello, initControler, initTemplate } from "./utils";

// pantalla de ejecucion

hello();      // nos saca un hello por consola

//! ---------------------------> renderizamos las etiquetas de la estructura inicial
initTemplate();      //estructura de la app

//! ---------------------------> lo ponemos sin parametro para que salte al caso de switch de undefined para evaluar el user
initControler();
getInfo();                  //se inicia desde el principio para que el fetch no tarde tanto
