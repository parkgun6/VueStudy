<template>
  <v-app>
    <default-bar />
    <v-card>
      <RouterView />
    </v-card>
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>
