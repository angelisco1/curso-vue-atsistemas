<template>
  <div>
    <h2>Propiedades</h2>
    <p>Me llamo: {{miNombre}}</p>
    <button type="button" @click="cambiarNombre">Cambiar nombre a JuanLuke</button>
    <p>Mi sobrino se llama: {{nombreSobrino}}</p>
  </div>
</template>

<script>
import { EventBus } from '../../main';

export default {
  props: {
    miNombre: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      nombreSobrino: ''
    }
  },
  methods: {
    cambiarNombre() {
      // this.miNombre = 'JuanLuke';
      this.$emit('onChangeNombreHijo', 'JuanLuke');
    }
  },
  created() {
    EventBus.$on('onSendNombre', (nombre) => {
      this.nombreSobrino = nombre;
    })
  }
}
</script>