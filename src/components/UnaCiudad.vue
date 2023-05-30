<template>
  <main class="ContenidoCiudad">
    <!-- implementar un loading -->
    <div class="loadingImg">
      <img
        v-if="isLoading"
        src="../images/spin.gif"
        style="width: 12rem"
        alt="loading"
      />
    </div>

    <div v-if="isLoading == false" class="weather-summary">
      <h2>Id: {{ city.id }}</h2>
      <h2>Ciudad: {{ city.name }}</h2>
      <img
        v-if="city.rain_probability >= 0.5"
        src="../images/rain.png"
        alt="loading"
      />
      <img
        v-if="city.rain_probability < 0.5"
        src="../images/sunny.png"
        alt="loading"
      />
      <h3>Temp: {{ city.temperature }} ºC</h3>
      <h3>Temp: {{ city.rain_probability }}</h3>
    </div>
    <div class="botonId">
      <label> ID: <input type="text" v-model="id" /> </label>
      <button @click="LlamarCiudad">Obtener Ciudad</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { getCity } from "../data_api/callApi";

const city = ref("");
const id = ref("");
let isLoading = ref("True");

const LlamarCiudad = async () => {
  console.log("+++Click función llamar ciudad - info id: ", id);
  try {
    city.value = await getCity(id);
    console.log("++++city.value", city.value);
    console.log("++++city.value id", city.value.id);
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
};
</script>

<style scoped>
.ContenidoCiudad {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  width: 55%;
}
.weather-summary {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  border: 3px solid grey;
  border-radius: 5%;
  display: inline-block;
  padding: 2rem;
}
.botonId {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
button {
  width: 7rem;
  margin: 1rem;
}
</style>
