import {
  PrintTemplateSpinner,
  CardsPokemons,
  PrintButton,
  PrintSpinner,
} from "../../components";
import { getData } from "../../global/state/globalState";
import { Paginacion, dataPokemon, filterPokemon } from "../../utils";
import "./Pokemon.css";


const template = () => `
  <div id="pokemon">
    <div id="containerFilter">
      <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input
        type="text"
        id="inputPokemon"
        placeholder="Busca tu pokemon favorito"
      />
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;

const dataService = async () => {
  const getDataPokemon = getData("Pokemon");      // esto es por si fueramos a acceder a mas de una api

  const { pokemonData, type } = getDataPokemon;   //destructuring

  CardsPokemons(pokemonData);        //mete el mapeo
  document.getElementById("spinner").innerHTML = "";
  PrintButton(type);
  document.getElementById("spinnerButtonFilter").innerHTML = "";
  addListeners();
  Paginacion(pokemonData, 25);
};

const addListeners = () => {
  // EVENT TO INPUT

  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
};

export const PrintPokemonPage = () => {       // = para borrar lo que ya tenga
  document.querySelector("main").innerHTML = template();
  PrintTemplateSpinner();
  PrintSpinner();
  dataService();
};
