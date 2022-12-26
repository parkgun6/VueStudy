<template>
  <div class="d-flex justify-center MainContent">
    <v-card aspect-ratio="16 / 9" class="border">
      <DefaultVue />
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import DefaultVue from "./layouts/default/Default.vue";
</script>

<style>
/* reset */
html,
body {
  overflow: hidden;
  height: 100%;
}

body {
  margin: 0;
  background-color: beige;
}

/* //reset */
/* layout */
#app {
  width: 375px;
  height: 100%;
  margin: 0 auto;
}

#app .MainContent {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
}

#app .Content {
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: floralwhite;
}
/* //layout */

/* PC(1024 ~) */

/* Tablet(768 - 1024) */
@media screen and (max-width: 1024px) {
  #root {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  #root {
    width: 375px;
  }
}

/* Mobile(375 - 450) */
@media screen and (max-width: 450px) {
  #root {
    width: 100%;
  }
}

/* Mobile(375) */
@media screen and (max-width: 375px) {
  #root {
    width: 100%;
    min-width: 320px;
  }
}
</style>
