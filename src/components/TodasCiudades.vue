<template>
  <div class="Tarjeta">
    <div class="weather-summary" v-for="(city, index) in cities" :key="index">
      <!--city[0] = porque la respuesta llega en un array   -->
      <h2>Id: {{ city[0] }}</h2>
      <h2>Ciudad: {{ city[1] }}</h2>
      <!-- comparacion para colocar la imagen -->
      <img v-if="city[3] >= 0.5" src="../images/rain.png" alt="loading" />
      <img v-if="city[3] < 0.5" src="../images/sunny.png" alt="loading" />
      <h3>Temp: {{ city[2] }} ºC</h3>
      <h3>Lluvia: {{ city[3] }} ºC</h3>
    </div>

    <!-- <div v-for="(item, index) in cities" :key="index">
                    {{ item }}
                  </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAllCity } from "../data_api/callApi";
console.log("++++getAllCity", getAllCity);
const cities = ref("");

//Se llama automaticamente apenas carga la web
onMounted(async () => {
  try {
    cities.value = await getAllCity();
    // cities tendra TODA la informacion de la llamada en array
    console.log("++++cities.value", cities.value);
  } catch (error) {
    console.log(error);
    // Handle error
  }
});
</script>

<style scoped>
.weather-summary {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  border: 3px solid grey;
  border-radius: 5%;
  display: inline-block;
  padding: 2rem;
}
</style>
