import Vue from "vue";
import Vuex from "vuex";
import ProductService from "../services/ProductService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    productDetail: [],
    basket: [],
    button: { text: "Sepete Ekle" },
  },
  getters: {
    getBasketLength: (state) => {
      return state.basket.length;
    },
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_PRODUCT_DETAIL(state, payload) {
      state.productDetail = payload;
    },
    ADD_TO_BASKET(state, payload) {
      state.basket.push(payload);
    },
    CHANGE_CARD_BUTTON_TEXT(state) {
      state.button.text = "Sepete Eklendi";
      setTimeout(() => {
        (state.button.text = "Sepete Ekle"), 1000;
      });
    },
  },
  actions: {
    addProductToBasket({ commit }, payload) {
      commit("ADD_TO_BASKET", payload);
    },
    fetchProducts({ commit }) {
      ProductService.getProducts()
        .then((response) => commit("SET_PRODUCTS", response.data))
        .catch((error) => console.log("An error occured: " + error));
    },
    fetchProductById({ commit }, payload) {
      ProductService.getProductById(payload)
        .then((response) => commit("SET_PRODUCT_DETAIL", response.data))
        .catch((error) => console.log("An error occured: " + error));
    },
  },
  modules: {},
});
