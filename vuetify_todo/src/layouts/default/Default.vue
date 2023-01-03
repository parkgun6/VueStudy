<template>
  <v-app>
    <default-bar />
    <routerView />
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue';
import DefaultView from './View.vue';
</script>
