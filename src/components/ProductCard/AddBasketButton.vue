<template>
  <button
    class="
      px-5.5
      py-2.5
      mb-1
      w-52
      text-m
      rounded-md
      text-white text-sm
      font-medium
      inline-block
      hover:bg-pink-400
      bg-pink-500
    "
  >
    {{ button.text }}
  </button>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["button", "basket"]),
  },
};
</script>

<style></style>