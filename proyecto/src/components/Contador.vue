<template>
  <div>
    <button v-bind:disabled="deshabilitarBoton" v-on:click="decrementar">-</button>
    <span>Cuenta: {{cuenta}}</span>
    <button :disabled="!deshabilitarBoton" @click="incrementar">+</button>
    <input type="number" :value="cuenta" @input="modificarCuenta" />
    <input type="number" v-model.number="cuenta" />
  </div>
</template>

<script>
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
    },
    decrementar() {
      this.cuenta -= 1
    }
  }
}
</script>