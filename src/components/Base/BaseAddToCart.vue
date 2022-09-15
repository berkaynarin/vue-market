<template>
  <div class="flex gap-2">  
    <basket-count-selector @basket-product-count = "setBasketCount" />
    <button
      class="p-2.5 w-40 rounded-md text-white text-sm font-medium inline-block"
      :class="isClicked ? clickedButtonStyle : addButtonStyle"
      @click="clickButtonHandle"
    >
      <div class="inline-block mr-2" v-if="isClicked">
        <svg
          class="clickIcon w-5 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
          />
        </svg>
      </div>
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import BasketCountSelector from '../ProductDetail/BasketCountSelector.vue';
export default {
  components: { BasketCountSelector },
  data() {
    return {
      addButtonStyle: "hover:bg-pink-400 bg-pink-500",
      clickedButtonStyle: "bg-green-600",
      buttonText: "Sepete Ekle",
      isClicked: false,
      productBasketCount: 1
    };
  },
  methods: {
    setBasketCount(productCount) {
      this.productBasketCount = productCount;
    },
    clickButtonHandle() {
      this.isClicked = true;
      this.buttonText = "Sepete Eklendi!";
      setTimeout(() => {
        this.isClicked = false;
        this.buttonText = "Sepete Ekle";
      }, 1000);
      this.$store.dispatch('addProduct', this.createBasketObject).then(() => {
        console.log("Product with id " + this.$route.params.id + " has added to basket")
      })
    },
    
  },
  computed: {
    createBasketObject() {
      return {id: this.$route.params.id, count: this.productBasketCount}
    }
  }
};
</script>