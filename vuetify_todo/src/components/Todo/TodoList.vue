<script>
import { useTodoStore } from '@/store';
import { storeToRefs } from 'pinia';

export default {
  data: () => ({
    items: [
      { userId: '', text: 'Real-Time', icon: 'mdi-clock' },
      { userId: '', text: 'Audience', icon: 'mdi-account' },
    ],
  }),
  setup() {
    const todoStore = useTodoStore();
    const todoList = storeToRefs(todoStore);
    console.log(todoList);
    return todoList;
  },
};
</script>
<template>
  <v-card class="mx-auto pa-4">
    <v-list>
      <v-list-subheader>T O D O S</v-list-subheader>
      <v-list-item
        v-for="(item, i) in todoList"
        :key="i"
        :value="item"
        active-color="primary"
        rounded="shaped"
        class="mt-1"
        v-bind:class="item.priority"
      >
        {{ item.title }}
      </v-list-item>
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
</style>
