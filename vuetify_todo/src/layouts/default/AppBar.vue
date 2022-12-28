<template>
  <v-card max-height="50px" fixed>
    <v-tabs class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <router-link to="/" class="fontColorWhite">
        <v-tab value="one"> HOME </v-tab>
      </router-link>
      <!-- <router-link to="/modal-test" class="fontColorWhite">
        <v-tab value="two"> MODAL </v-tab>
      </router-link> -->
      <router-link to="/todo-list" class="fontColorWhite">
        <v-tab value="three">TODO</v-tab>
      </router-link>
    </v-tabs>
  </v-card>
</template>

<script lang="ts" setup>
//
</script>

<style>
.fontColorWhite {
  color: white;
}
</style>
