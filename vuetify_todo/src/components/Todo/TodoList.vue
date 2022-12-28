<script>
import { useTodoStore } from "@/store";
import { storeToRefs } from "pinia";

export default {
  data: () => ({
    items: [
      { userId: "", text: "Real-Time", icon: "mdi-clock" },
      { userId: "", text: "Audience", icon: "mdi-account" },
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
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title> <div v-text="item.todo"></div></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>
.foo {
  padding-bottom: 75px;
}
</style>
