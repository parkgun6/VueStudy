<script>
export default {
  props: ["userId"],
};
</script>

<template>
  <v-card class="mx-auto align-left" outline>
    <v-layout>
      <v-list>
        <v-list-item
          prepend-avatar="https://ionicframework.com/docs/img/demos/avatar.svg"
          :title="userId"
        >
        </v-list-item>
      </v-list>
    </v-layout>
  </v-card>
</template>
