<template>
  <div>
    <h2>Formulario</h2>
    <form @submit="sendData">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" v-model.trim="nombre">
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
    }
  },
  methods: {
    sendData(event) {
      event.preventDefault();
      if (this.nombre) {
        const usuario = {
          nombre: this.nombre,
          apellido: 'aaaaa',
          telefono: 12345,
          correo: 'email',
          password: 'aaa',
          rol: 'usuario'
        }
        this.$store.dispatch('guardarUsuario', usuario)
          .then(() => {
            this.$router.push('/');
          })
      }
    }
  }
}
</script>