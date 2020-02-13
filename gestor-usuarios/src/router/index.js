import Vue from 'vue';
import Home from '../views/Home';
import Formulario from '../views/Formulario';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/nuevo-usuario', component: Formulario },
]

const router = new Router({
  mode: 'history',
  routes
});

export default router;