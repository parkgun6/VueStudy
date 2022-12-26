<template>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
    color="black"
    absolute
    inset
    app
    height="auto"
    width="auto"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>
    <v-divider></v-divider>
    <strong>Vuetify</strong>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
