import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: {},
    button: { text: "Sepete Ekle" },
  },
  getters: {
    productCount: (state) => {
      return state.basket.count;
    },
  },
  mutations: {
    ADD_TO_BASKET(state, basketObject) {
      state.basket.push(basketObject);
    },
  },
  actions: {},
  modules: {},
});
