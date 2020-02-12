<template>
  <div>
    <!-- <p>Un parráfo</p>
    <hr> -->
    <slot name="header"></slot>
    <slot name="mainContent"></slot>
    <slot name="footer">
      <p>Footer 2020</p>
    </slot>
  </div>
</template>

<script>
export default {

}
</script>