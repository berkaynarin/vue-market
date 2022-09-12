import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: {id: []},
    button: {text: 'Sepete Ekle'}
  },
  getters: {
    productCount: state => {
      return state.basket.id.length
    }
  },
  mutations: {
    ADD_TO_BASKET(state) {
      state.basket.id.push('1')
    }
  },
  actions: {},
  modules: {},
});
