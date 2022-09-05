<template>
  <div class="colors grid grid-cols-2 gap-3">
    <p class="font-medium">Colors:</p>
    <br />
    <button
      v-for="(info, index) in productTypes"
      :key="info.id"
      :style="{ backgroundColor: info.buttonBackground }"
      @click="updateView(index)"
      class="text-slate-100 rounded-sm"
    >
      {{ info.productColor }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    productTypes: {
      type: Array,
    },
    updateView: {
      type: Function,
    },
  },
};
</script>

<style></style>
