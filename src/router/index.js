import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/todoList",
    component: () => import("../views/todoList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
