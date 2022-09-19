<template>
  <div class="flex flex-col gap-2">
    <p class="font-semibold">Price:</p>
    <p v-if="generateRandomPrice > 0" class="line-through text-gray-500">{{ price + generateRandomPrice }} ₺</p>
    <p class="text-pink-500 font-semibold text-lg">
      {{ price }} ₺ <span v-if="generateRandomPrice > 0" class="text-black text-base">(Save {{generateRandomPrice}} ₺)</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    price: { type: Number },
  },
  computed: {
    generateRandomPrice() {
      return parseInt(Math.random() * 10)
    }
  }
};
</script>

<style></style>
