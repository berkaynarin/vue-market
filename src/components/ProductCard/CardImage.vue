<template>
  <div>
    <img class="h-40 rounded-sm" :src="ImageSrc" />
  </div>
</template>

<script>
export default {
  props: {
    ImageSrc: {
      type: String,
    },
  },
};
</script>

<style></style>
