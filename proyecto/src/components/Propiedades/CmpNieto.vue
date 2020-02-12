<template>
  <div>
    <h2>Propiedades</h2>
    <p>Me llamo: {{miNombre}}</p>
    <button type="button" @click="emitirNombre">Emitir mi nombre</button>
  </div>
</template>

<script>
import { EventBus } from '../../main';

export default {
  data() {
    return {
      miNombre: 'Kylo'
    }
  },
  methods: {
    emitirNombre() {
      // EventBus.$emit('onSendNombre', this.miNombre);
      EventBus.sendNombre(this.miNombre);
    }
  }
}
</script>