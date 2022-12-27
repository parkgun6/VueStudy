<script>
import axios from 'axios';
import InputUserId from './InputUserId.vue';

export default {
  components: { InputUserId },
  data() {
    return {
      userId: '',
      userInput: '',
      inputUserid: '',
      todoList: [],
    };
  },
  watch: {},
  methods: {
    getTodos() {
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
    setUserId() {
      this.userId = this.inputUserid;
    },
  },
};
</script>

<template>
  <div>
    <InputUserId />
    <div v-for="list in todoList">
      {{ list }}
    </div>
  </div>
</template>
