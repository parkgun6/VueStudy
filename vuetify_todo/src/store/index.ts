// Utilities
import { createPinia, defineStore } from 'pinia';

export default createPinia();

export const useUserIdStore = defineStore('userId', {
  state: () => {
    return { userId: '' };
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

export const useTodoStore = defineStore('todo', {
  state: (): { todoList: Array<object>; userId: string } => {
    return {
      todoList: [],
      userId: '',
    };
  },
  getters: {},
  actions: {
    addTodo(userId: string, todo: object) {
      console.log(userId, todo);
      this.todoList.push(todo);
      localStorage.setItem(this.userId, JSON.stringify(this.todoList));
    },
    getTodoList(userId: string) {
      this.userId = userId;

      const todoLists = localStorage.getItem(this.userId);
      if (todoLists) {
        this.todoList = JSON.parse(todoLists);
      }
      console.log(this.todoList);
      return JSON.parse(todoLists);
    },
  },
});
