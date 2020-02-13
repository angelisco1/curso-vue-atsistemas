import Vue from 'vue';
import Home from '../views/Home';
import Formulario from '../views/Formulario';
import Usuario from '../views/Usuario';
import Error404 from '../views/Error404';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/nuevo-usuario', component: Formulario },
  { path: '/usuario/:id', component: Usuario },
  { path: '*', component: Error404 },
]

const router = new Router({
  mode: 'history',
  routes
});

export default router;