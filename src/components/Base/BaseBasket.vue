<template>
  <p>Sepet: ({{ productCount }})</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["productCount"]),
  },
};
</script>

<style></style>
