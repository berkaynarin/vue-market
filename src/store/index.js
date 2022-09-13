import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: [],
    button: { text: "Sepete Ekle" },
  },
  getters: {
    productCount: (state) => {
      return state.basket;
    },
  },
  mutations: {
    ADD_TO_BASKET(state, basketObject) {
      state.basket.push(basketObject);
    },
    CHANGE_CARD_BUTTON_TEXT(state) {
      state.button.text = "Sepete Eklendi";
      setTimeout(() => {
        (state.button.text = "Sepete Ekle"), 1000;
      });
    },
  },
  actions: {},
  modules: {},
});
