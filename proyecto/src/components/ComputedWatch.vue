<template>
  <div>
    <h2>Computed</h2>
    <!-- <p>Nombre y apellidos: {{nombre}} {{apellido}}</p> -->
    <p :style="{color: colorLetra}">Nombre y apellidos: {{nombreCompleto}}</p>
    <input type="text" v-model="nombre" />
    <input type="text" v-model="apellido" />
    <input type="text" v-model="ciudad" />
    <h2>Watch</h2>
    <p>Validación: {{estado}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Ángel',
      apellido: 'Villalba',
      ciudad: 'Madrid',
      estado: '...',
      colorLetra: 'yellowgreen'
    }
  },
  computed: {
    nombreCompleto() {
      console.log('Se está modificando Nombre o Apellido');
      return this.nombre + ' ' + this.apellido;
    }
  },
  watch: {
    nombre(newNombre, oldNombre) {
      setTimeout(() => {
        if (['tony', 'robb', 'arya', 'bran', 'sansa', 'rickon'].includes(newNombre.toLowerCase())) {
          this.estado = 'Nombre válido';
        } else {
          this.estado = 'Nombre no válido';
        }
      }, 500);
      if (newNombre.length > oldNombre.length) {
        this.colorLetra = 'yellowgreen';
      } else {
        this.colorLetra = 'lightblue';
      }
    },
    nombreCompleto() {
      console.log('Va cambiando...');
    }
  }
}
</script>
