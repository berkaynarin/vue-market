<template>
  <div>
    <div class="flex justify-around px-10">
      <div class="flex flex-col gap-5 items-center basis-1/5">
        <ProductTitle :brand="productDetail.title"></ProductTitle>
        <ProductImage :imgURL="productDetail.image"></ProductImage>
        <CartButton
          v-show="onSale"
        ></CartButton>
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
//Components
import ProductTitle from "@/components/ProductDetail/ProductTitle.vue";
import ProductImage from "@/components/ProductDetail/ProductImage.vue";
import ProductFeatures from "@/components/ProductDetail/ProductFeatures.vue";
import ProductPrice from "@/components/ProductDetail/ProductPrice.vue";
import ProductReview from "@/components/ProductDetail/ProductReview.vue";
import CartButton from "@/components/Base/BaseAddToCart.vue";
import BaseBasket from "@/components/Base/BaseBasket.vue";

//Services
import ProductService from "@/services/ProductService.js";

export default {
  created() {
    ProductService.getProductById(this.$route.params.id)
      .then((response) => (this.productDetail = response.data))
      .catch((error) => console.log("An error occured: " + error));
      console.log(this.productDetail)
  },
  data() {
    return {
      productDetail: [],
      onSale: true,
    };
  },
  components: {
    ProductTitle,
    ProductImage,
    ProductFeatures,
    ProductPrice,
    ProductReview,
    CartButton,
    BaseBasket,
  },
  methods: {
    updateView(index) {
      this.selectedProduct = index;
    },
    addProduct() {
      if (this.inventory > 0) {
        this.cart.push(this.productTypes[this.selectedProduct].id);
        this.productTypes[this.selectedProduct].productInventory -= 1;
      }
    },
    removeProduct() {
      if (this.cart > 0) {
        this.cart.pop(this.productTypes[this.selectedProduct].id);
        this.productTypes[this.selectedProduct].productInventory += 1;
      }
    },
    addProductReview(anyReview) {
      this.productTypes[this.selectedProduct].productReview.push(anyReview);
    },
    fetchProductFeatures(feature) {
      for (let i = 0; i < this.productTypes.length; i++) {
        this.productTypes[i].productFeatures.push(feature[i].title);
        this.productTypes[i].productImage = feature[i].url;
      }
    },
  },
};
</script>
