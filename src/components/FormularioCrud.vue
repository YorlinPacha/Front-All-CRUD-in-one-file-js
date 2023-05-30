<template>
    <div class="contenedorFormulario">
        <h2>Formulario</h2>
        <label>ID: <input type="text" v-model="id"></label>
        <label>Nombre: <input type="text" v-model="name"></label>
        <label>Temp: <input type="number" v-model="temperature"> ºC</label>
        <label>Prob. lluvia: <input type="number" v-model="rain_probability"></label>
        <button @click="CrearCity()">POST - Create ciudad</button>
        <button @click="EliminarCity(id)">DEL - Delete ciudad</button>
        <button @click="ActualizarCity(id)">PUT - Update ciudad</button>
    </div>

  
</template>

<script setup>
import { ref } from "vue";
import { createCity } from "../data_api/callApi";
import { deleteCity } from "../data_api/callApi";
import { updateCity } from "../data_api/callApi";

const id = ref("");
const name = ref("");
const temperature = ref("");
const rain_probability = ref("");
//console.log("+++info : ",id.value, name.value, temperature.value, rain_probability.value);
 
//Funcion para llamar API y crear ciudad
const CrearCity = async () => {
  console.log("+++Click función crear ciudad: ", id, name, temperature, rain_probability);
  try {
    await createCity(id, name, temperature, rain_probability);
 
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};

//Funcion para llamar API y eliminar ciudad
const EliminarCity = async () => {
  console.log("+++Click función ELIMINAR ciudad-info id: ", id);
  try {
    await deleteCity(id);
 
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};

//Funcion para llamar API y eliminar ciudad
const ActualizarCity = async () => {
  console.log("+++Click función Actualizar ciudad: ", id, name, temperature, rain_probability);
  try {
    await updateCity(id, name, temperature, rain_probability);
 
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};
</script>

<style scoped>
.contenedorFormulario{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}


</style>