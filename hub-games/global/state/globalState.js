// -----------------> INICIALIZACION EN LAZY DEL ESTADO ----------------

const currentUser = {
  name: sessionStorage.getItem("currentUser")      // sessionStorage es una propiedad q accede al objeto asociado a la sesion actual
    ? sessionStorage.getItem("currentUser")
    : "",                                          //hace un ternario para que puedas no hacer login?
};

// ------------------> INICIALIZACION EN LAZY DEL ESTADO------------

let userData = localStorage.getItem(currentUser.name)           //para guardar favoritos
  ? JSON.parse(localStorage.getItem(currentUser.name))
  : {
      name: "",
      token: false,
      fav: [],
    };

// ------------------> DATA GLOBAL DE LA APLICACION--------
const dataGlobal = {
  pokemon: [],
  ricky: [],
};

//! -------------------- funcion que SETTEA----------------     
                                                      // una guarda el username y la otra lo coge
export const setUser = (username) => {
  currentUser.name = username;
};

//!--------------------- funcion que GET

export const getUser = () => {
  return currentUser;
};

//! -------------------- funcion que SETTEA----------------

export const setData = (data, page) => {
  switch (page) {
    case "Pokemon":
      dataGlobal.pokemon = data;

      break;

    default:
      break;
  }
};

export const setUserData = (data) => {
  console.log(".....metiendo datos en el contexto");
  userData.fav = data?.fav;
  userData.name = data?.name;

  const stringUser = JSON.stringify(userData);
  localStorage.removeItem(`${currentUser.name}`);
  console.log(userData.name);
  localStorage.setItem(`${currentUser.name}`, stringUser);
};

export const getUserData = () => {
  return userData;
};
//!--------------------- funcion que GET

export const getData = (page) => {
  switch (page) {
    case "Pokemon":
      return dataGlobal.pokemon;
    default:
      break;
  }
  return dataGlobal;
};
