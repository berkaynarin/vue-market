<template>
  <router-link :to="{ name: 'product', params: { id: 1 } }">
    <div class="px-10">
      <div class="flex flex-row flex-wrap justify-between gap-8 mb-3">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :cardImageSrc="product.image"
          :brand="product.title"
          :name="product.category"
          :description="product.description"
          :price="product.price"
          class="basis-12"
        ></ProductCard>
      </div>
    </div>
  </router-link>
</template>

<script>
import ProductCard from "../components/ProductCard/ProductCard.vue";
import ProductService from "../services/ProductService.js";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    ProductService.getProducts()
      .then((response) => (this.products = response.data))
      .catch((error) => console.log(error.response));
  },
  components: { ProductCard },
};
</script>

<style></style>
