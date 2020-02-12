<template>
  <div>
    <h1>Proyecto VUE</h1>
    <!-- <p>Un párrafo</p> -->
    <!-- <app-contador></app-contador> -->
    <!-- <app-componente-global></app-componente-global> -->
    <!-- <app-directivas></app-directivas> -->
    <!-- <input type="text" v-power-mode> -->
    <!-- <app-computed-watch></app-computed-watch> -->
    <!-- <app-cmp-padre></app-cmp-padre> -->
    <app-card>
      <h2 slot="header">Título</h2>
      <img slot="footer" src="https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png" />
      <p slot="mainContent">Footer</p>
    </app-card>
    <app-card>
      <h2 slot="header">Título</h2>
      <app-contador slot="mainContent"></app-contador>
      <a slot="mainContent" href="#">Documentación de Vue</a>
    </app-card>
    <p>{{2 | doble | precio}}</p>
    <p>{{'a' | doble | precio}}</p>
    <p>{{'Lorem IPSUM dolor sit, amet consectetur adipisicing elit. Libero, ipsum possimus molestias harum, expedita voluptate minus qui aperiam est nam nisi officia odio, voluptates vitae suscipit ut. Commodi, iusto esse?' | hide(['est', 'ipsum'], '_')}}</p>
  </div>
</template>

<script>
import Contador from './components/Contador'
import Directivas from './components/Directivas'
import ComputedWatch from './components/ComputedWatch'
import CmpPadre from './components/Propiedades/CmpPadre'
import Card from './components/Card'
export default {
  components: {
    appContador: Contador,
    appDirectivas: Directivas,
    appComputedWatch: ComputedWatch,
    appCmpPadre: CmpPadre,
    appCard: Card,
  },
  filters: {
    doble(value) {
      if (typeof(value) === 'string') {
        return value.repeat(2);
      }
      return value * 2;
    },
    hide(value, words, replaceStr = '*') {
      words.forEach(word => {
        const regExp = new RegExp(word, 'gi');
        value = value.replace(regExp, replaceStr.repeat(word.length))
      })
      return value;
    }
  }
}
</script>

<style>

</style>