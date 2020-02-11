<template>
  <div>
    <h2>Directivas VUE</h2>
    <p v-text="msg"></p>
    <p v-html="textoNegrita"></p>
    <button type="button" @click="toggleMostrar">Toggle Mostrar</button>
    <template v-if="mostrar">
      <p>Se muestra si mostrar es true</p>
      <span>Tambien se muestra</span>
    </template>
    <p v-else>Se muestra si mostrar es false</p>
    <p v-show="mostrar">Se muestra si mostrar es true (v-show)</p>
    <ul>
      <li v-for="(mascota, pos) in mascotas" :key="mascota.id">{{pos}}: {{mascota.nombre}}</li>
    </ul>
    <ul>
      <li v-for="(value, key, numIt) in serie" :key="numIt+key">{{key}}: {{value}}</li>
    </ul>
    <pre v-marcar.blink="lightblue">{{JSON.stringify(serie.otrosDatos, null, 4)}}</pre>
    <pre v-marcar="'lightgreen'">{{JSON.stringify(serie.otrosDatos, null, 4)}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightblue: 'lightblue',
      msg: "La directiva v-text inyecta texto en una etiqueta.",
      textoNegrita: "<strong>En negrita</strong>",
      mostrar: true,
      nextId: 4,
      mascotas: [
        {id: 1, nombre: 'Periquito'},
        {id: 2, nombre: 'Canario'},
        {id: 3, nombre: 'Tortuga'},
      ],
      serie: {
        titulo: 'The Walking Dead',
        temporadas: 8,
        otrosDatos: {
          fechaEstreno: 2000,
          cancelada: false,
        }
      }
    }
  },
  methods: {
    toggleMostrar() {
      this.mostrar = !this.mostrar;
    }
  },
  directives: {
    marcar: {
      bind(el, binding, vnode) {
        console.log(binding.modifiers);
        const color = binding.value;

        const blink = Object.keys(binding.modifiers).includes('blink');
        let intervalId = null;
        el.addEventListener('mouseover', () => {
          // el.style.backgroundColor = 'lightgreen';

          if (blink) {
            let colorBlink = color;
            intervalId = setInterval(() => {
              el.style.backgroundColor = colorBlink === color ? 'white' : color;
              colorBlink = el.style.backgroundColor;
            }, 500)
          } else {
            el.style.backgroundColor = color;
          }
        })
        // el.addEventListener('mouseleave', () => {
        el.addEventListener('mouseout', () => {
          if (blink) {
            clearInterval(intervalId)
          }
          el.style.backgroundColor = 'white';
        })
      }
    }
  }
}
</script>