<script lang="ts">
export default {
  emits: ["catchUserId"],
  data() {
    return {
      user: {
        userId: "",
      },
      inputUserId: "",
      modalState: false,
    };
  },
  methods: {
    handleUserId() {
      this.user.userId = this.inputUserId;
      this.$emit("catchUserId", this.user);
      this.modalState = false;
      this.inputUserId = "";
    },
  },
};
</script>
<template>
  <v-card-actions>
    <v-btn variant="outlined" @click="modalState = true"> USER ID </v-btn>
  </v-card-actions>
  <v-dialog v-model="modalState" max-width="350px">
    <v-card>
      <v-toolbar color="primary" title="Please Input Your User ID"></v-toolbar>
      <v-card-text>
        <v-text-field
          v-model="inputUserId"
          label="User ID"
          required
          @keyup.enter="handleUserId"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text" @click="handleUserId">Ok</v-btn>
        <v-btn variant="text" @click="modalState = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
