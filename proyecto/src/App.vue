<template>
  <div>
    <h1>Proyecto VUE</h1>
    <!-- <p>Un párrafo</p> -->
    <!-- <app-contador></app-contador> -->
    <!-- <app-componente-global></app-componente-global> -->
    <!-- <app-directivas></app-directivas> -->
    <!-- <input type="text" v-power-mode> -->
    <!-- <app-computed-watch></app-computed-watch> -->
    <app-cmp-padre></app-cmp-padre>
  </div>
</template>

<script>
import Contador from './components/Contador'
import Directivas from './components/Directivas'
import ComputedWatch from './components/ComputedWatch'
import CmpPadre from './components/Propiedades/CmpPadre'
export default {
  components: {
    appContador: Contador,
    appDirectivas: Directivas,
    appComputedWatch: ComputedWatch,
    appCmpPadre: CmpPadre,
  }
}
</script>

<style>

</style>