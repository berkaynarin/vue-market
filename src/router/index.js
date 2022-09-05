import Vue from "vue";
import VueRouter from "vue-router";
import ProductCatalog from "../views/ProductCatalog.vue";
import ProductDetail from "../views/ProductDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductCatalog,
  },
  {
    path: "/about",
    name: "about",
    component: ProductDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
