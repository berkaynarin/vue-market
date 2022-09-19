import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import BaseHeader from "./components/Base/BaseHeader.vue";
import "./assets/tailwind.css";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

Vue.config.productionTip = false;

Vue.component("BaseHeader", BaseHeader);
Vue.component("v-icon", Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
