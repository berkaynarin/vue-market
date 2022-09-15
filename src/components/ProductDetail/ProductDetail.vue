<template>
  <div>
    <div class="flex justify-around px-10">
      <div class="flex flex-col gap-5 items-center basis-1/5">
        <ProductTitle :brand="productDetail.title"></ProductTitle>
        <ProductImage :imgURL="productDetail.images[0]"></ProductImage>
          <BaseAddToCart
          v-show="onSale"
        />     
      </div>
      <div class="flex flex-col gap-4 basis-1/5">
        <ProductFeatures :materials="productDetail.description" />
        <ProductPrice :price="productDetail.price" />
      </div>
      <div class="flex flex-col justify-between basis-1/5 gap-7">
        <div>
          <ProductReview
            @addReview="addProductReview"
            :productReview="review"
          />
        </div>
        <div class="flex flex-col items-center">
          <BaseBasket />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTitle from "@/components/ProductDetail/ProductTitle.vue";
import ProductImage from "@/components/ProductDetail/ProductImage.vue";
import ProductFeatures from "@/components/ProductDetail/ProductFeatures.vue";
import ProductPrice from "@/components/ProductDetail/ProductPrice.vue";
import ProductReview from "@/components/ProductDetail/ProductReview.vue";
import BaseAddToCart from "@/components/Base/BaseAddToCart.vue";
import BaseBasket from "@/components/Base/BaseBasket.vue";
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('fetchProductById', this.$route.params.id)
  },
  data() {
    return {
      onSale: true,
    };
  },
  components: {
    ProductTitle,
    ProductImage,
    ProductFeatures,
    ProductPrice,
    ProductReview,
    BaseAddToCart,
    BaseBasket,
  },
  computed: {
    ...mapState(['productDetail'])
  },
};
</script>
