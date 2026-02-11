import { defineStore } from "pinia";

interface Todo {
  done: boolean;
  title: string;
}

interface TodoState {
  items: Array<Todo>;
}

export const useTodosStore = defineStore("todos", {
  state: (): TodoState => ({ items: [] }),
  actions: {
    addTodo() {
      this.items.push({ title: "Write todo here", done: false });
    },
    removeTodo(index: number) {
      console.log("elo removeTodo");
      this.items.splice(index, 1);
    },
  },
  getters: {
    completedTodosCount: (state) => state.items.filter((el) => el.done).length,
  },
});
