<template>
  <div
    class="flex flex-col items-center border-2 border-gray-50 rounded-md w-57.5 h-110 p-1.5 shadow-md hover:shadow-2xl"
  >
    <div class="flex flex-row-reverse justify-content-center">
      <router-link to="/product">
        <CardImage :ImageSrc="cardImageSrc"></CardImage>
      </router-link>
      <CardLikeIcon></CardLikeIcon>
    </div>
    <div class="flex flex-col items-center">
      <CardDescription
        :brand="brand"
        :name="name"
        :description="description"
        class="line-clamp-2"
      ></CardDescription>
    </div>
    <CardPrice :price="price"></CardPrice>
    <router-link to="/product">
      <AddBasketButton></AddBasketButton>
    </router-link>
  </div>
</template>

<script>
import CardImage from "./Image.vue";
import CardDescription from "./CardDescription.vue";
import CardPrice from "./Price.vue";
import AddBasketButton from "./AddBasketButton.vue";
import CardLikeIcon from "./LikeIcon.vue";
export default {
  props: {
    cardImageSrc: String,
    brand: String,
    name: String,
    description: String,
    price: String,
  },
  components: {
    CardLikeIcon,
    CardImage,
    CardDescription,
    CardPrice,
    AddBasketButton,
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
</style>
