<script>
import { useTodoStore } from "@/store";

export default {
  props: ["userId"],
  data() {
    return {
      todo: "",
      state: "start",
      icon: "mdi-account",
    };
  },
  methods: {
    addTodo() {
      const todoStore = useTodoStore();
      const obj = {
        userId: this.userId,
        todo: this.todo,
        state: this.state,
        icon: this.icon,
      };
      todoStore.addTodo(obj);
      this.todo = "";
    },
  },
};
</script>

<template>
  <v-card-text>
    <v-text-field
      v-model="todo"
      @keyup.enter="addTodo"
      label="New Todo"
      hide-details="true"
    />
  </v-card-text>
</template>
