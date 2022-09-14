<template>
  <div class="px-10">
    <div class="flex flex-row flex-wrap justify-between gap-8 mb-3">
      <div v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          <ProductCard
            :cardImageSrc="product.images[0]"
            :brand="product.title"
            :name="product.category.name"
            :description="product.description"
            :price="product.price"
            class="basis-12"
          ></ProductCard>
        </router-link>
      </div>
    </div>
  </div>
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
