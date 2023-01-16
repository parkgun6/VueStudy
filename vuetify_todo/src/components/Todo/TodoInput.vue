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
      const title = await this.$swal.fire({
        title: 'Enter Todo Title',
        input: 'text',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write Title!';
          }
        },
      });
      if (title.dismiss === 'backdrop' || title.dismiss === 'cancel') {
        console.log('cancel or backdrop');
        return;
      }
      console.log('abc');
      const { value: todo } = await this.$swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here',
        },
        showCancelButton: true,
        allowOutsideClick: false,
      });
      const { value: Importance } = await this.$swal.fire({
        title: 'Select Importance',
        icon: 'question',
        input: 'select',
        inputValue: 'first',
        inputOptions: {
          first: '1st',
          second: '2nd',
          third: '3rd',
          fourth: '4th',
          fifth: '5th',
        },
        allowOutsideClick: false,
      });
      const todolist = { title: title.value, todo, Importance };
      this.addTodo(todolist);
    },
    addTodo(todolist) {
      const todoStore = useTodoStore();
      const obj = {
        // userId: this.userId,
        title: todolist.title,
        todo: todolist.todo,
        Importance: todolist.Importance,
      };
      todoStore.addTodo(this.userId, obj);
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
