import "./Gallery.css"

import { printCardPokemon } from "/Users/lucia/Desktop/FT WEB/09/FT WEB/proyecto-hubgames/hub-games/components/Pokemon/Pokemon.js";



const template = () => `

<section id="galleryContainer"></section>
`



const allPokemon = []
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"

const getData = async() =>{

    for (let i=1; i<151; i++){
        const data = await fetch (urlPokemon`${i}`)
        const jsonData= await data.json()
        allPokemon.push(jsonData)
    }
console.log(allPokemon)
    mappeoPokemon(allPokemon)
}



const mappeoPokemon = (data) =>{
    const allPokemonMap = data.map((pokemon)=> ({
        name: pokemon.name,
        // name: (pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)),
        image: pokemon.sprites?.front_default,
        backImage: pokemon.sprites?.back_default,
        typeOne: pokemon.types[0]?.type?.name,
        typeTwo: (pokemon.types[1]?.type?.name != undefined ? pokemon.types[1]?.type?.name : ""),
        // typeTwo: (pokemon.types[1]?.type?.name != undefined)

    }))
    printFigure(allPokemonMap)
    console.log(allPokemonMap)
}


export const getInfo = async () =>{
    console.log("actualizando info")
    const data = await getData()

}



const printFigure = (data) =>{
    data.map(item => printCardPokemon(item))
}

export const PrintPokemonPage = () =>{
    document.querySelector("main").innerHTML = template()
    printCardPokemon()
    getData()

}


// export const printTemplateGallery = () =>{
//     document.querySelector("main").innerHTML=template()
//     getData() 
// }

