<template>
  <div>
    <p class="text-s">{{ brand }} {{ name }}</p>
    <p class="font-bold">{{ description }}</p>
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
