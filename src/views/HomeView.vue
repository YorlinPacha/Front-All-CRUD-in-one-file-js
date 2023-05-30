<template>
  <div class="cajaPadre">
     <UnaCiudadVue class="unaCaja"/>
     <TodasCiudades />
   </div>
 </template>

<script setup>
import TodasCiudades from '../components/TodasCiudades.vue';
import UnaCiudadVue from '../components/UnaCiudad.vue';

     
</script>

<style scoped>
.cajaPadre{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  margin: 4rem auto;
  width: 40%;
  border-radius: 10px;
  flex-direction: column;
  text-align: center;
}
.unaCaja{
  border: 1px solid red;
  margin: 2rem;
}

</style>


