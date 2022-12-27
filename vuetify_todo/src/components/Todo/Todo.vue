<script>
export default {
  data: () => ({
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
};
</script>
<template>
  <v-card class="mx-auto pa-4">
    <v-list>
      <v-list-subheader>REPORTS</v-list-subheader>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title><div v-text="item.text"></div></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
