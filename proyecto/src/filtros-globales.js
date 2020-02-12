import Vue from 'vue';

Vue.filter('precio', (value) => {
  return value + '€';
})

// {{num | precio}}