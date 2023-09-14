import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
// import ServicesView from "../views/ServicesView.vue";
// import CategoriesView from "../views/ServicesView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/services",
    name: "ServicesView",
    component: () => import("../views/ServicesView.vue"),
  },
  // {
  //   path: "/categories",
  //   name: "Categories",
  //   component: CategoriesView,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// const router = createRouter({
//   history: createWebHistory(),

// });

export default router;
