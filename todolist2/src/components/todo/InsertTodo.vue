<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInput: '',
    };
  },
  watch: {},
  methods: {
    insertTodos() {
      try {
        if (this.userId === '') {
          alert('유저명을 입력하세요.');
          return;
        }
        console.log('aaaaaaaaa');
        axios
          .get(`http://211.47.239.80:8080/get-todo/${this.userId}`)
          .then((res) => {
            console.log(res.data);
            res.data.forEach((list) => {
              this.todoList.push({
                todo: list.todo,
                state: list.delFlag,
              });
            });
            console.log(this.todoList);
          });
      } catch {
        this.todo = 'Not Connected';
      }
    },
    addTodoList() {
      this.todoList.push({
        todo: this.userInput,
        state: 'ready',
      });
      this.userInput = '';
    },
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="userInput" @keyup.enter="addTodoList" />
  </div>
</template>
