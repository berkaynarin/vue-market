<template>
  <div class="flex flex-col items-center">
    <p v-if="onSale" class="font-medium">Inventory: <br /></p>
    <p v-if="inventory > 5">There are {{ inventory }} products left</p>
    <p v-else-if="inventory <= 5 && inventory > 0">
      Product is running out of stock <br />
      Current Stock: {{ inventory }}
    </p>
    <p v-if="inventory == 0">Product is out of stock</p>
    <p v-if="!onSale">Product is not on sale.</p>
  </div>
</template>

<script>
export default {
  props: {
    inventory: {
      type: Number,
    },
    onSale: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
