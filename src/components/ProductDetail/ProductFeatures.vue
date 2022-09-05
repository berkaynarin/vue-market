<template>
  <div class="material">
    <p class="font-medium">Material: <br /></p>
    <ul>
      <li :key="index" v-for="(material, index) in materials">
        {{ material }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    materials: null,
  },
  data() {},
};
</script>

<style></style>
