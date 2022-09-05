<template>
  <div>
    <div class="flex justify-around px-10">
      <div class="flex flex-col justify-between basis-1/5">
        <ProductTitle
          :brand="brand"
          :name="name"
          :description="description"
        ></ProductTitle>
        <ProductImage :imgURL="image"></ProductImage>
        <CartButton
          @product-add-handle="addProduct"
          @product-remove-handle="removeProduct"
          v-show="(onSale, inventory)"
        ></CartButton>
      </div>
      <div class="flex flex-col justify-between basis-1/5">
        <ProductFeatures :materials="getMaterials" />
        <ProductColors
          :productTypes="productTypes"
          :updateView="updateView"
        ></ProductColors>
        <ProductSize v-show="onSale" :size="size"></ProductSize>
      </div>
      <div class="flex flex-col justify-between basis-1/5 gap-7">
        <div>
          <ProductInventory
            :inventory="inventory"
            :onSale="onSale"
          ></ProductInventory>
        </div>
        <div class="flex flex-col items-center">
          <Basket :cart="cart"></Basket>
        </div>
        <div>
          <ProductReview
            @addReview="addProductReview"
            :productReview="review"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTitle from "@/components/ProductDetailProductTitle.vue";
import ProductImage from "@/components/ProductDetail/ProductImage.vue";
import ProductFeatures from "@/components/ProductDetail/ProductFeatures.vue";
import ProductSize from "@/components/ProductDetail/ProductSize.vue";
import ProductColors from "@/components/ProductDetail/ProductColors.vue";
import ProductInventory from "@/components/ProductDetail/ProductInventory.vue";
import ProductReview from "@/components/ProductDetail/ProductReview.vue";
import CartButton from "@/components/Basket/CartButton.vue";
import Basket from "../components/Basket/Basket.vue";

import axios from "axios";

export default {
  components: {
    ProductTitle,
    ProductImage,
    ProductFeatures,
    ProductSize,
    ProductColors,
    ProductInventory,
    ProductReview,
    CartButton,
    Basket,
  },
  data() {
    return {
      selectedProduct: 0,
      productTypes: [
        {
          id: 0,
          onSale: true,
          productBrand: "Pazarama",
          productName: "T-shirt",
          productFeatures: [],
          productReview: [],
          productDescription: "Keeps you warm",
          productPrice: "85.00",
          productColor: "Green",
          productSize: ["XS", "S", "M", "L"],
          productImage: "",
          productInventory: 7,
          buttonBackground: "#5BB318",
        },
        {
          id: 1,
          onSale: true,
          productBrand: "Altınyıldız",
          productName: "T-shirt",
          productFeatures: [],
          productReview: [],
          productDescription: "High Quality",
          productPrice: "70.00",
          productColor: "Gray",
          productSize: ["S", "M", "L"],
          productImage: "",
          productInventory: 4,
          buttonBackground: "#73777B",
        },
        {
          id: 2,
          onSale: true,
          productBrand: "Mavi",
          productName: "T-shirt",
          productFeatures: [],
          productReview: [],
          productDescription: "Sports-wear",
          productPrice: "99.00",
          productColor: "Blue",
          productSize: ["S", "M", "XL", "2XL"],
          productImage: "",
          productInventory: 0,
          buttonBackground: "#4CACBC",
        },
        {
          id: 3,
          onSale: false,
          productBrand: "Koton",
          productName: "T-shirt",
          productFeatures: [],
          productReview: [],
          productDescription: "Stylish",
          productPrice: "71.00",
          productColor: "Red",
          productSize: ["S", "M", "XL", "2XL"],
          productImage: "",
          buttonBackground: "#990000",
        },
      ],
      cart: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      /* .then((response) => this.fetchProductFeatures(response.data)); */
      .then((response) => console.log(response));
  },

  computed: {
    brand() {
      return this.productTypes[this.selectedProduct].productBrand;
    },
    name() {
      return this.productTypes[this.selectedProduct].productName;
    },
    description() {
      return this.productTypes[this.selectedProduct].productDescription;
    },
    price() {
      return this.productTypes[this.selectedProduct].productPrice;
    },
    image() {
      return this.productTypes[this.selectedProduct].productImage;
    },
    size() {
      return this.productTypes[this.selectedProduct].productSize;
    },
    inventory() {
      return this.productTypes[this.selectedProduct].productInventory;
    },
    onSale() {
      return this.productTypes[this.selectedProduct].onSale;
    },
    review() {
      return this.productTypes[this.selectedProduct].productReview;
    },
    getMaterials() {
      return this.productTypes[this.selectedProduct].productFeatures;
    },
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
