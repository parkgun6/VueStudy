<script>
import { useTodoStore } from '@/store';
import { storeToRefs } from 'pinia';
import { onMounted, getCurrentInstance } from 'vue';

export default {
  props: ['userId'],
  data() {
    return {
      todoList: [],
    };
  },
  watch: {
    userId(newUserId, oldUserId) {
      console.log(this.userId);
      console.log(this.todoList);
      this.getTodoList();
    },
  },
  methods: {
    getTodoList() {
      const todoStore = useTodoStore();
      const todoList = todoStore.getTodoList(this.userId);
      console.log(todoList);
      this.todoList = todoList;
      return todoList;
    },
  },
  setup() {
    onMounted(() => {
      // const todoStore = useTodoStore();
      // const todoList = todoStore.getTodoList(getCurrentInstance().props.userId);
      // console.log(todoList);
      // getCurrentInstance().data.todoList = todoList;
      // return todoList;
    });
  },
};
</script>
<template>
  <v-card class="mx-auto pa-4">
    <v-list>
      <v-list-subheader>T O D O S</v-list-subheader>
      <v-card height="400px">
        <v-list-item
          v-for="(item, i) in todoList"
          :key="i"
          :value="item"
          rounded="shaped"
          class="mt-1"
          v-bind:class="item.Importance"
        >
          {{ item.title }}
        </v-list-item>
      </v-card>
    </v-list>
  </v-card>
</template>

<style scoped>
.first {
  background-color: rgba(255, 59, 59, 0.726);
}
.second {
  background-color: rgba(253, 189, 70, 0.87);
}
.third {
  background-color: rgba(58, 212, 58, 0.815);
}
.fourth {
  background-color: rgba(126, 126, 253, 0.801);
}
.fifth {
  background-color: rgba(128, 128, 128, 0.644);
}
.v-card {
  overflow-y: auto;
}
</style>
