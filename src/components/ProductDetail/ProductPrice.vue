<template>
  <div class="flex flex-col gap-2">
    <p class="font-semibold">Price:</p>
    <p class="line-through text-gray-500">{{ price + 10 }} ₺</p>
    <p class="text-pink-500 font-semibold text-lg">
      {{ price }} ₺ <span class="text-black text-base">(Save 10 ₺)</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    price: { type: Number },
  },
};
</script>

<style></style>
