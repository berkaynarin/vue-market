<template>
  <div>
    <div class="grid grid-cols-4 gap-5 mb-3 justify-items-center">
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
export default {
  data() {
    return {
      productTypes: [
        {
          id: 0,
          onSale: true,
          productBrand: "Apple",
          productName: "iPhone",
          productDescription: "Akıllı Telefon",
          productPrice: "12.499,00",
          productColor: "Green",
          productSize: ["XS", "S", "M", "L"],
          productImage: "./src/assets/images/t-shirt-green.jpg",
          productInventory: 7,
          buttonBackground: "#5BB318",
        },
        {
          id: 1,
          onSale: true,
          productBrand: "Altınyıldız",
          productName: "T-shirt",
          productDescription: "High Quality",
          productPrice: "70.00",
          productColor: "Gray",
          productSize: ["S", "M", "L"],
          productImage: "./src/assets/images/t-shirt-gray.jpg",
          productInventory: 4,
          buttonBackground: "#73777B",
        },
        {
          id: 2,
          onSale: true,
          productBrand: "Mavi",
          productName: "T-shirt",
          productDescription: "Sports-wear",
          productPrice: "99.00",
          productColor: "Blue",
          productSize: ["S", "M", "XL", "2XL"],
          productImage: "./src/assets/images/t-shirt-blue.jpg",
          productInventory: 0,
          buttonBackground: "#4CACBC",
        },
        {
          id: 3,
          onSale: false,
          productBrand: "Koton",
          productName: "T-shirt",
          productDescription: "Stylish",
          productPrice: "71.00",
          productColor: "Red",
          productSize: ["S", "M", "XL", "2XL"],
          productImage: "./src/assets/images/t-shirt-red.jpg",
          buttonBackground: "#990000",
        },
        {
          id: 4,
          onSale: true,
          productBrand: "Apple",
          productName: "iPhone",
          productDescription: "Akıllı Telefon",
          productPrice: "12.499,00",
          productColor: "Green",
          productSize: ["XS", "S", "M", "L"],
          productImage: "./src/assets/images/t-shirt-green.jpg",
          productInventory: 7,
          buttonBackground: "#5BB318",
        },
        {
          id: 5,
          onSale: true,
          productBrand: "Altınyıldız",
          productName: "T-shirt",
          productDescription: "High Quality",
          productPrice: "70.00",
          productColor: "Gray",
          productSize: ["S", "M", "L"],
          productImage: "./src/assets/images/t-shirt-gray.jpg",
          productInventory: 4,
          buttonBackground: "#73777B",
        },
        {
          id: 6,
          onSale: true,
          productBrand: "Mavi",
          productName: "T-shirt",
          productDescription: "Sports-wear",
          productPrice: "99.00",
          productColor: "Blue",
          productSize: ["S", "M", "XL", "2XL"],
          productImage: "./src/assets/images/t-shirt-blue.jpg",
          productInventory: 0,
          buttonBackground: "#4CACBC",
        },
        {
          id: 7,
          onSale: false,
          productBrand: "Koton",
          productName: "T-shirt",
          productDescription: "Stylish",
          productPrice: "71.00",
          productColor: "Red",
          productSize: ["S", "M", "XL", "2XL"],
          productImage: "./src/assets/images/t-shirt-red.jpg",
          buttonBackground: "#990000",
        },
      ],
    };
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
  },
  components: { ProductCard },
};
</script>

<style></style>
