<script>
import TodoInput from './TodoInput.vue';

export default {
  components: { TodoInput },
  props: ['userId'],
};
</script>

<template>
  <v-card class="mx-auto align-left" outline>
    <v-layout class="justify-space-between">
      <v-list-item
        prepend-avatar="https://ionicframework.com/docs/img/demos/avatar.svg"
        :title="userId"
        position="left"
        max-width="50%"
      >
      </v-list-item>
      <v-list-item>
        <TodoInput :userId="userId" />
      </v-list-item>
    </v-layout>
  </v-card>
</template>
