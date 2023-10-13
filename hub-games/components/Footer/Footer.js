import "./Footer.css"

const template = () =>  `
<div class ="footer-container">
    <div class="search-footer">
             <div>
                    <label for="search">¿No encuentras un Pokemon?</label>
            </div>
             <div>
                    <input type="search" name="search" id="search-input" placeHolder="Pikachu">
                    <button type="button" id="search-button">🔎</button>

             </div>
     </div>
 </div>
`

export const printTemplateFooter = () =>{
    document.querySelector("footer").innerHTML= template()
}