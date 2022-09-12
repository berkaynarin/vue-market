<template>
  <div class="flex justify-between bg-gradient-to-r from-emerald-800 to-emerald-300 mb-7">
    <h1 class="py-2 pl-2 font-mono font-bold text-slate-100 text-2xl">
      <slot>Pazarama</slot>
    </h1>
    <base-basket />
  </div>
</template>

<script>
import BaseBasket from '../Basket/BaseBasket.vue';
export default {
  components: { BaseBasket },};
</script>

<style></style>
