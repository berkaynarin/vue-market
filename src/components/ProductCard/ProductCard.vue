<template>
  <div
    class="
      flex flex-col
      border-2 border-gray-50
      items-center
      justify-between
      rounded-md
      w-56
      h-110
      p-1.5
      shadow-md
      hover:shadow-2xl
      cursor-pointer
    "
  >
    <div class="flex flex-row-reverse justify-content-center">
      <CardImage :ImageSrc="cardImageSrc" />
      <CardLikeIcon  />
    </div>
    <div>
      <CardDescription
        :brand="brand"
        :name="name"
        class="line-clamp-2"
      ></CardDescription>
    </div>
    <CardPrice :price="price"></CardPrice>
    <CardAddProduct class="card-add-product" />
  </div>
</template>

<script>
import CardImage from "./CardImage.vue";
import CardDescription from "./CardDescription.vue";
import CardPrice from "./CardPrice.vue";
import CardAddProduct from "./CardAddProduct.vue";
import CardLikeIcon from "./CardLikeIcon.vue";

export default {
  props: {
    cardImageSrc: String,
    brand: String,
    name: String,
    description: String,
    price: Number,
    productId: Number,
  },

  components: {
    CardLikeIcon,
    CardImage,
    CardDescription,
    CardPrice,
    CardAddProduct,
  },
};
</script>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.card-add-product {
  padding-bottom: 0.5rem
}
</style>
