import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: {productId: ['1', '2'] , productName: 'Tshirt'},
    button: {text: 'Sepete Ekle'}
  },
  getters: {
    productCount: state => {
      return state.basket.productId.length
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
