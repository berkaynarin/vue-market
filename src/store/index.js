import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
    button: { text: "Sepete Ekle" },
  },
  getters: {
    productCount: (state) => {
      return state.basket.length;
    },
  },
  mutations: {
    GET_PRODUCTS(state, payload) {
      state.basket = payload;
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
    addProductToBasket({ commit }, value) {
      commit("ADD_TO_BASKET", value);
    },
  },
  modules: {},
});
