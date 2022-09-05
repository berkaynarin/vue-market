import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseHeader from "./components/Base/BaseHeader.vue";

Vue.config.productionTip = false;

Vue.component("BaseHeader", BaseHeader);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
