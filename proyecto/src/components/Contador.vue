<template>
  <div>
    <button v-on:click="cambiarCuenta(-1, $event)">-</button>
    <button @click="cambiarCuenta(1, $event)">+</button>

    <button v-bind:disabled="deshabilitarBoton" v-on:click="decrementar">-</button>
    <span>Cuenta: {{cuenta}}</span>
    <button :disabled="!deshabilitarBoton" @click="incrementar">++</button>
    <input type="number" :value="cuenta" @input="modificarCuenta" />
    <input type="number" v-model.number="cuenta" />
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data () {
    return {
      cuenta: 2,
      deshabilitarBoton: true
    }
  },
  methods: {
    modificarCuenta (e) {
      // console.log(typeof (e.target.value))
      this.cuenta = Number(e.target.value)
    },
    incrementar() {
      this.cuenta += 1
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    },
    decrementar() {
      this.cuenta -= 1
    },
    cambiarCuenta(num, event) {
      console.log(event);
      this.cuenta += num;
    }
  }
}
</script>