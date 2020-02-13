<template>
  <div>
    <h1>Mi aplicación</h1>
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav';
export default {
  components: {
    appNav: Nav
  }
}
</script>