<template>
  <div>
    <img :src="ImageSrc" />
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
