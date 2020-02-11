<template>
  <div>
    <h1>Proyecto VUE</h1>
    <!-- <p>Un párrafo</p> -->
    <!-- <app-contador></app-contador> -->
    <!-- <app-componente-global></app-componente-global> -->
    <app-directivas></app-directivas>
    <input type="text" v-power-mode>
  </div>
</template>

<script>
import Contador from './components/Contador'
import Directivas from './components/Directivas'
export default {
  components: {
    appContador: Contador,
    appDirectivas: Directivas,
  }
}
</script>

<style>

</style>