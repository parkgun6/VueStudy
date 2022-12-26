<script>
import Modal from "@/components/Modal.vue";
import Guest from "@/components/Todo/Guest.vue";

export default {
  components: { Modal, Guest },
  data() {
    return {
      todo: "",
      userId: "",
    };
  },
  methods: {
    consoleMsg(user) {
      console.log(user);
      this.userId = user.userId;
    },
  },
};
</script>

<template>
  <v-card>
    <v-card class="d-flex" text="T O D O L I S T" variant="outlined" flex="6">
      <Modal @catchUserId="consoleMsg" />
    </v-card>
    <v-card v-if="this.userId" variant="outlined" flex="6">
      <v-sheet height="650px">
        <v-card-text>
          <Guest :userId="this.userId" />
        </v-card-text>
        <v-card-text>
          <v-text-field v-model="todo" label="New Todo" required></v-text-field>
        </v-card-text>
      </v-sheet>
    </v-card>
    <v-card v-if="this.userId == ''" title="Please Input Your UserId" flex="6">
    </v-card>
  </v-card>
</template>
