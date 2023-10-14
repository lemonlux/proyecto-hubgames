import "./Nav.css"

const template = () => `

<nav>
        <ul>
            <li id="buttonHome">HOME</li>
            <li id="buttonLogout">PROFILE</li>
            <li id="buttonNight">NIGHT MODE</li>
        </ul>
</nav>
`

const addListeners = () =>{
    
}




export const printTemplateNav = () =>{
    document.getElementById("containerNav").innerHTML = template()
}