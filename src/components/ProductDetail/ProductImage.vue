<template>
  <div>
    <img class="rounded-sm border-2 border-slate-300" :src="imgURL" />
  </div>
</template>

<script>
export default {
  props: {
    imgURL: String,
  },
};
</script>

<style></style>
