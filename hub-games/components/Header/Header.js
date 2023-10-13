import "./Header.css"
import { printTemplateNav } from "/Users/lucia/Desktop/FT WEB/09/FT WEB/proyecto-hubgames/hub-games/components/Nav/Nav.js";


const template = () =>`
<div id="pokedex-logo">
<img src="https://res.cloudinary.com/daxddugwt/image/upload/v1696760751/jgsl4y6xcbllsxzx4z7l.png" alt="logo" id="logo"/>
<h1>POKEDEX</h1>
</div>

<div id="containerNav"></div>

`

export const printTemplateHeader = () =>{
    document.querySelector("header").innerHTML = template ()
    printTemplateNav()
}