export const typePokemon = (data) => {
  const nameType = [];
  data.forEach((element) => {
    element.type.forEach((singleType) => {
      !nameType.includes(singleType.type.name) &&
        nameType.push(singleType.type.name);
    });
  });

  return nameType;
};

// guardar en un array los tipos que no esten repetidos
