<template>
  <v-card>
    <v-tabs bg-color="primary">
      <router-link to="/" class="fontColorWhite">
        <v-tab value="one"> HOME </v-tab>
      </router-link>
      <router-link to="/modal-test" class="fontColorWhite">
        <v-tab value="two"> MODAL </v-tab>
      </router-link>
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
