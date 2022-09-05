<template>
  <div>
    <h1 class="font-bold">{{ brand }} {{ name }}</h1>
    <p class="font-semibold">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    brand: String,
    name: String,
    description: String,
  },
};
</script>

<style></style>
