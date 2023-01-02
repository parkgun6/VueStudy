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
    async newTodoModalOpen() {
      const { value: title } = await this.$swal.fire({
        title: "Enter Todo Title",
        input: "text",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write Title!";
          }
        },
      });
      const { value: todo } = await this.$swal.fire({
        input: "textarea",
        inputLabel: "Message",
        inputPlaceholder: "Type your message here...",
        inputAttributes: {
          "aria-label": "Type your message here",
        },
        showCancelButton: true,
      });
      const { value: priority } = await this.$swal.fire({
        title: "Select Priority",
        input: "select",
        inputOptions: {
          First: "1st",
          Second: "2nd",
          Third: "3rd",
          Fourth: "4th",
          FifTh: "5th",
        },
        inputPlaceholder: "Select Priority",
        showCancelButton: true,
      });
      if ((title, todo, priority)) {
        this.$swal.fire(title, todo, priority);
      }
    },
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
  <div>
    <v-card-text>
      <v-btn
        class="inputTodo"
        @click="newTodoModalOpen"
        label="New Todo"
        hide-details="true"
        readonly
      >
        New Todo
      </v-btn>
    </v-card-text>
  </div>
</template>

<style>
.inputTodo {
  cursor: pointer;
}
</style>
