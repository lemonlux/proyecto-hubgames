import { printTemplateHeader } from "/Users/lucia/Desktop/FT WEB/09/FT WEB/proyecto-hubgames/hub-games/components/Header/Header.js";
import { printTemplateFooter } from "/Users/lucia/Desktop/FT WEB/09/FT WEB/proyecto-hubgames/hub-games/components/Footer/Footer.js";


export const initTemplate = () =>{
    const app = document.getElementById("app")
    const header = document.createElement("header");
    const main = document.createElement("main")
    const footer = document.createElement("footer");

    app.append(header, main, footer)

    printTemplateFooter()
    printTemplateHeader()

}


