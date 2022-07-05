import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path:"/",
    name:"Layout",
    component:()=>import('../layout')
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import("../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
