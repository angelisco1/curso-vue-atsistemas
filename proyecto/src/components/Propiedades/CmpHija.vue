<template>
  <div>
    <h2>Propiedades</h2>
    <p>Me llamo: {{miNombre}}</p>
    <cmp-nieto></cmp-nieto>
  </div>
</template>

<script>
import CmpNieto from './CmpNieto'
export default {
  components: {
    cmpNieto: CmpNieto
  },
  props: {
    miNombre: {
      type: String,
      default: 'Leia',
      // required: true
    }
  }
}
</script>