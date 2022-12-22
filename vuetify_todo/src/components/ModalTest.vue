<script lang="ts">
export default {
  data() {
    return { userId: "", inputUserId: "" };
  },
  methods: {
    handleUserId() {
      this.userId = this.inputUserId;
    },
  },
};
</script>
<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">From the top</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar color="primary" title="Opening from the top"></v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="inputUserId"
                label="Name"
                required
                @keyon.enter="handleUserId"
              ></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn variant="text" @click="isActive.value = false"
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
