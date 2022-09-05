<template>
  <div class="navBar bg-gradient-to-r from-emerald-800 to-emerald-300 mb-7">
    <router-link to="/">
      <h1 class="py-2 pl-2 font-mono font-bold text-slate-100 text-2xl">
        {{ company }}
      </h1>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      company: "Vue Market",
    };
  },
};
</script>

<style></style>
