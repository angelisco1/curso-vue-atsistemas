import Vue from 'vue';

Vue.directive('power-mode', {
  bind(el, binding, vnode) {
    // También sirven los eventos de keyup y keypress
    el.addEventListener('input', () => {

      const colorLetra = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

      el.style.color = colorLetra;
      el.style.marginLeft = '5px';
      el.style.marginTop = '5px';

      setTimeout(() => {
        el.style.color = 'black';
        el.style.marginLeft = '0px';
        el.style.marginTop = '0px';
      }, 200)

    })
  }
})