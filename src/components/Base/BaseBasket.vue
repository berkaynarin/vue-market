<template>
  <p>Sepet: ({{ getBasketLength }})</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getBasketLength"]),
  },
};
</script>

<style></style>
