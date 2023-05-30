// 1 importar axios : en terminal -> npm i axios

import axios from "axios";

//-------------OBTENER UNA CIUDAD
export async function getCity(id) {
  //console.log("id dentro de get city", id);
  const url = "http://127.0.0.1:5000/cities/" + id.value;
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const data = response.data;
      //console.log("dentro de get una city", data);
      return data;
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};

//-------------OBTENER TODAS LAS CIUDADES

export async function getAllCity() {
  const url = "http://127.0.0.1:5000/cities/";
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const data = response.data;

      //console.log("dentro de getAll", data);
      return data;
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};

//-------------CREAR UNA CIUDAD

export async function createCity(id, name, temperature, rain_probability) {
  // console.log(
  //   "+++dentro de create city INFO : ",
  //   id.value,
  //   name.value,
  //   temperature.value,
  //   rain_probability.value
  // );
  const url = "http://localhost:5000/cities";
  try {
    const response = await axios.post(url, {
      id: id.value,
      name: name.value,
      temperature: temperature.value,
      rain_probability: rain_probability.value,
    });

    if (response.status === 200) {
      //console.log("dentro de create city", response);
      location.reload();
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};

//-------------BORRAR UNA CIUDAD

export async function deleteCity(id) {
  //console.log("+++dentro de eliminar city INFO : ", id.value);
  const url = "http://127.0.0.1:5000/cities/" + id.value;
  try {
    const response = await axios.delete(url);

    if (response.status === 200) {
      location.reload();
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
};

//-------------ACTUALIZAR UNA CIUDAD
export async function updateCity(id, name, temperature, rain_probability) {
  const url = "http://127.0.0.1:5000/cities/" + id.value;
  try {
    const response = await axios.put(url, {
      id: id.value,
      name: name.value,
      temperature: temperature.value,
      rain_probability: rain_probability.value,
    });

    if (response.status === 200) {
      location.reload();
    } else {
      console.log("No hay respuesta del servidor");
    }
  } catch (error) {
    console.log("No hay respuesta del servidor", error);
  }
}

//export default { getCity, createCity, updateCity, deleteCity }
