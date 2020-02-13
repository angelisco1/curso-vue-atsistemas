<template>
  <div>
    <pre>{{JSON.stringify(usuario($route.params.id), null, 4)}}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // created() {
  //   console.log(this.$route)
  // },
  computed: {
    ...mapGetters({
      usuario: 'getUsuarioById'
    })
  }
}
</script>

<style>

</style>