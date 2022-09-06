<template>
  <div>
    <div class="flex flex-row gap-5 mb-3 justify-items-center">
      <ProductCard
        v-for="products in productTypes"
        :key="products.id"
        :cardImageSrc="products.productImage"
        :brand="products.productBrand"
        :name="products.productName"
        :description="products.productDescription"
        :price="products.productPrice"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard/ProductCard.vue";
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    axios
      .get("localhost:3000/productTypes")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response));
  },
  components: { ProductCard },
};
</script>

<style></style>
