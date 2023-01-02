// Utilities
import { createPinia, defineStore } from "pinia";

export default createPinia();

export const useUserIdStore = defineStore("userId", {
  state: () => {
    return { userId: "" };
  },
  getters: {
    getUserId(): string {
      return this.userId;
    },
  },
  actions: {
    setUserId(userId: string) {
      this.userId = userId;
    },
  },
});

export const useTodoStore = defineStore("todo", {
  state: (): { todoList: Array<object> } => {
    return {
      todoList: [],
    };
  },
  getters: {
    getTodoList(): Array<object> {
      return this.todoList;
    },
  },
  actions: {
    addTodo(todo: object) {
      console.log(todo);
      this.todoList.push(todo);
    },
  },
});
