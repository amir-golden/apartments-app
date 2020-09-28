import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Appartments from "@/views/Appartments";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Appartments",
    component: Appartments
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  store.dispatch("getAppartmentList").then(() => {
    next();
  });
});

export default router;
