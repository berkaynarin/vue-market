<template>
  <div>
    <div class="flex flex-row gap-5 mb-3 justify-items-center">
      <ProductCard
        v-for="products in productTypes"
        :key="products.id"
        :cardImageSrc="products.image"
        :brand="products.title"
        :name="products.category"
        :description="products.description"
        :price="products.price"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard/ProductCard.vue";
import axios from "axios";
export default {
  data() {
    return {
      productTypes: [],
    };
  },
  created() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => (this.productTypes = response.data))
      .catch((error) => console.log(error.response));
  },
  components: { ProductCard },
};
</script>

<style></style>
