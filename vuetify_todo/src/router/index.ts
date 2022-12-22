// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/modal-test",
    component: () => import("@/components/ModalTest.vue"),
  },
  {
    path: "/todo-list",
    component: () => import("@/components/TodoList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
