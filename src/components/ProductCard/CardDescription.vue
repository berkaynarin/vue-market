<template>
  <div class="text-center">
    <p class="text-sm">{{ brand }} {{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    brand: null,
    name: null,
    description: null,
  },
};
</script>

<style></style>
