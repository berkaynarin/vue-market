<template>
  <div class="px-10">
    <div class="flex flex-row flex-wrap justify-between gap-8 mb-3">
          <ProductCard
            v-for="product in products" :key="product.id"
            :cardImageSrc="product.images[0]"
            :brand="product.title"
            :name="product.category.name"
            :description="product.description"
            :price="product.price"
            @click.native="handleProductCardClick(product.id)" 
          ></ProductCard>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from "../components/ProductCard/ProductCard.vue";

export default {
  created() {
    this.$store.dispatch('fetchProducts')
  },
  methods: {
    handleProductCardClick(id) {
      this.$router.push({name: 'product', params: { id: id }})
    }
  },
  components: { ProductCard },
  computed: {
    ...mapState(['products'])
  },
};
</script>

<style></style>
