<template>
  <p>Sepet: ({{ cart.length }})</p>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
};
</script>

<style></style>
