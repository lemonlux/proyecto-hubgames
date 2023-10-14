import "./Pokemon.css"


const template = (pokemon) =>`

<figure>
    <div class="pokemon-container">
        <img src="${pokemon?.image}" alt="${pokemon?.name}"/>
        <h3 class="${pokemon?.name}">${pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</h3>
        <div class="class-container">
        <h4 class="${pokemon?.typeOne}">${pokemon?.typeOne.toUpperCase()}</h4>
        <h4 class="${pokemon?.typeTwo}">${pokemon?.typeTwo.toUpperCase()}</h4>
        </div>
    </div>
    

</figure>
`

export const printCardPokemon = (pokemon) =>{
    pokemon.name && (document.getElementById("galleryContainer").innerHTML += template(pokemon))
}
