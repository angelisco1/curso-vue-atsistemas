<template>
  <div>
    <h2>Inicio</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        <router-link :to="{path: '/usuario/' + usuario.id}">{{usuario.nombre}} {{usuario.apellido}}</router-link>
        <button type="button" @click="eliminarUsuario(usuario.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      usuarios: 'getUsuarios'
    })
  },
  methods: {
    eliminarUsuario(id) {
      this.$store.dispatch('eliminarUsuario', id)
        // .then()
        .catch(err => {
          this.$router.push('/no-existe');
        })
    }
  }
}
</script>