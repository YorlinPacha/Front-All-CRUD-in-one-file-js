<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="contenedor">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">Formulario</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.contenedor{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}
nav{
  display: flex;
  align-items: center;
}
.link{
  margin: 0 2rem 0 2rem;
  font: bold;
  font-size: 1.2rem;
}
</style>
