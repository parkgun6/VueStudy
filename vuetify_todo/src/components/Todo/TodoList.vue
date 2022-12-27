<script>
// import Modal from "@/components/Modal.vue";
import Guest from "@/components/Todo/Guest.vue";
import LoginModal from "@/components/Todo/LoginModal.vue";
import Todo from "@/components/Todo/Todo.vue";

export default {
  components: { Guest, LoginModal, Todo },
  data() {
    return {
      todo: "",
      userId: "",
    };
  },
  methods: {
    consoleMsg(userId) {
      console.log(userId);
      this.userId = userId;
    },
  },
};
</script>

<template>
  <v-card>
    <v-card class="d-flex" text="T O D O L I S T" variant="outlined" flex="6">
      <!-- <Modal @catchUserId="consoleMsg" /> -->
      <LoginModal @catchUserId="consoleMsg" />
    </v-card>
    <v-card
      v-if="this.userId"
      v-scroll.self="onScroll"
      class="overflow-y-auto"
      min-height="100% - 90px"
    >
      <v-card-text>
        <Guest :userId="this.userId" />
      </v-card-text>
      <v-card-text>
        <v-text-field v-model="todo" label="New Todo" required></v-text-field>
      </v-card-text>
      <Todo />
    </v-card>
  </v-card>
</template>
