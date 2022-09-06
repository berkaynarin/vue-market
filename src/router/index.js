import Vue from "vue";
import VueRouter from "vue-router";
import ProductCatalog from "../views/ProductCatalog.vue";
import CatalogDetail from "../views/CatalogDetail.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductCatalog,
  },
  {
    path: "/product/:id",
    name: "product",
    component: CatalogDetail,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
