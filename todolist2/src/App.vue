<script>
export default {};
</script>

<template>
  <div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    <br />
    <router-link to="/">home</router-link>
    <br />
    <router-link to="/todo">todo</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
