<template>
  <div class="cmp-g">
    <p>Este es un componente global</p>
    <h2></h2>
    <img src="" alt="">
  </div>
</template>

<style scoped lang="scss">
  // @import url('colores.scss');
  $azul: blue;

  .cmp-g {
    p {
      color: $azul;
      &:hover {
        color: red;
      }
    }
  }

  .cmp-g p {
    color: blue;
  }
  .cmp-g p:hover {
    color: red;
  }
</style>
