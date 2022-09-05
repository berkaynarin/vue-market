<template>
  <div>
    <h3 class="font-medium">Sizes:</h3>
    <div class="grid grid-cols-2 gap-2">
      <p
        class="border-2 border-indigo-300 text-center"
        :class="isOnSale ? 'line-through' : ' '"
        :key="productSize.id"
        v-for="productSize in size"
      >
        {{ productSize }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Array,
    },
    isOnSale: null,
  },
};
</script>

<style></style>
