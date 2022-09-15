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
            class="basis-12"
            @click.native="handleProductCardClick(product.id)" 
          ></ProductCard>
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
  methods: {
    handleProductCardClick(path) {
      this.$router.push({name: 'product', params: { id: path }})
    }
  },
  components: { ProductCard },
};
</script>

<style></style>
