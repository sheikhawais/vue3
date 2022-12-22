import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/UsersView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  { 
    name: "notfound", 
    path: "/:pathMatch(.*)*", 
    component: () => import('../views/NotFound.vue')
  }
  //   {
  //     path: "/about",
  //     name: "about",
  //     component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
