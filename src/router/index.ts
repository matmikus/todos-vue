import { createRouter, createWebHistory } from "vue-router";
import CompletedTodoList from "@/components/CompletedTodoList.vue";
import TodoList from "@/components/TodoList.vue";

const routes = [
  { path: "/", name: "home", component: TodoList },
  { path: "/completed", name: "completed", component: CompletedTodoList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
