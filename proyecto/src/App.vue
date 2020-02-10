<template>
  <div>
    <h1>Proyecto VUE</h1>
    <p>Un párrafo</p>
    <app-contador></app-contador>
    <app-componente-global></app-componente-global>
  </div>
</template>

<script>
import Contador from './components/Contador'
export default {
  components: {
    appContador: Contador
  }
}
</script>

<style>

</style>