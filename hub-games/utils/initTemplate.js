import { PrintTemplateHeader, PrintTemplateFooter } from "../components";  // importa el template del header y footer

export const initTemplate = () => {         //    el template q inicia toda la app 
  const app = document.getElementById("app");

  //? -------> vamos a crear los elementos
  const header = document.createElement("header");
  header.classList= "header"
  header.setAttribute("id", "header-id")
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  //? -------> inyectamos os elementos en el contenedor de la app
  console.log(app);
      //saca toda la app por consola

  app.append(header, main, footer);
  PrintTemplateHeader();
  PrintTemplateFooter();

  //------- solo metemos header y footer porque, aunq creemos el main, el main varia segun el juego
};

export const hello = () => {
  console.log("hello");
};


//hello para ver si lo esta cogiendo