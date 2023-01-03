<script>
import { useTodoStore } from '@/store';

export default {
  props: ['userId'],
  data() {
    return {
      todo: '',
      state: 'start',
      icon: 'mdi-account',
    };
  },
  methods: {
    async newTodoModalOpen() {
      const { value: title } = await this.$swal.fire({
        title: 'Enter Todo Title',
        input: 'text',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write Title!';
          }
        },
      });
      const { value: todo } = await this.$swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here',
        },
        showCancelButton: true,
      });
      const { value: priority } = await this.$swal.fire({
        title: 'Select Priority',
        input: 'select',
        inputOptions: {
          first: '1st',
          second: '2nd',
          third: '3rd',
          fourth: '4th',
          fifth: '5th',
        },
        inputPlaceholder: 'title',
        showCancelButton: true,
      });
      console.log(`${title},${todo},${priority}`);
      const todolist = { title, todo, priority };
      console.log(todolist);
      this.addTodo(todolist);
    },
    addTodo(todolist) {
      const todoStore = useTodoStore();
      const obj = {
        userId: this.userId,
        title: todolist.title,
        todo: todolist.todo,
        priority: todolist.priority,
      };
      console.log(todolist);
      todoStore.addTodo(obj);
      this.todo = '';
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
