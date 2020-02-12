<template>
  <div>
    <h2>Propiedades</h2>
    <p>Me llamo: {{miNombre}}</p>
    <hr>
    <cmp-hijo @onChangeNombreHijo="cambiarNombreHijo" :miNombre="nombreHijo"></cmp-hijo>
    <cmp-hija :miNombre="nombreHija"></cmp-hija>
  </div>
</template>

<script>
import CmpHijo from './CmpHijo';
import CmpHija from './CmpHija';
export default {
  components: {
    cmpHijo: CmpHijo,
    cmpHija: CmpHija,
  },
  data() {
    return {
      miNombre: 'Anakin',
      nombreHija: 'Leia',
      nombreHijo: 'Luke'
    }
  },
  methods: {
    cambiarNombreHijo(nuevoNombre) {
      this.nombreHijo = nuevoNombre;
    }
  }
}
</script>