import { CardsPokemons } from "../components";
import { setData } from "../global/state/globalState";
import { getByIdPokemon } from "../services/pokemon.service";
import { Paginacion } from "./paginacion";
import { typePokemon } from "./typePokemon";



let dataGlobal;

        //funcion asincrona que coge de la pokeapi
export const dataPokemon = async () => {
  const rawData = [];

  for (let i = 1; i < 151; i++) {
    rawData.push(await getByIdPokemon(i));            //lo mete en un array de la funcion que los saca
  }                                                   //axios

  return dataMap(rawData);
};

const dataMap = (data) => {       //mismo mapeo de los pokemons
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites?.front_default,
    backImage: pokemon.sprites?.back_default,
    typeOne: pokemon.types[0]?.type?.name,
    typeTwo: (pokemon.types[1]?.type?.name != undefined ? pokemon.types[1]?.type?.name : ""),
    type: pokemon.types,
    id: pokemon.id,
  }));

  const types = typePokemon(filterData);        //para los que no incluyen tipo (solo un tipo)
  dataGlobal = {
    pokemonData: filterData,
    type: types,
  };

  return dataGlobal;
};

export const filterPokemon = (filterDataInputButton, donde) => {
  /// donde : es si quiero hacerlo por type en los botones o por nombre en el input
  /// filterDataInputButton:  la palabra que nos sirve para filtrar

  switch (donde) {
    case "type":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.type[0].type.name
            .toLowerCase()
            .includes(filterDataInputButton.toLowerCase())
        );

        if (filterData.length === 0) {              // si no tiene subtipo no lo mete
          const filterData = dataGlobal.pokemonData.filter((pokemon) =>
            pokemon.type[1]?.type.name
              .toLowerCase()
              .includes(filterDataInputButton.toLowerCase())
          );

          Paginacion(filterData, 3);                //cuando se busca por subtipo aparecen de 3 en 3
        } else {
          Paginacion(filterData, 3);
        }
      }

      break;

    case "name":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.name
            .toLowerCase()
            .includes(filterDataInputButton.toLowerCase())
        );

        if (filterDataInputButton == "") {            //la paginacion es de 25 pokemons la hoja
          Paginacion(filterData, 25);
        } else {
          Paginacion(filterData, 5);
        }
      }
      break;
  }
};

export const getInfo = async () => {          //funcion que ejecuta el fetch
  console.log("actualizando info... 👌🔍");
  const data = await dataPokemon();
  setData(data, "Pokemon");
};

getInfo();
