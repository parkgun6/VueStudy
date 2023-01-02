<script>
// import Modal from "@/components/Modal.vue";
import Guest from "@/components/Todo/Guest.vue";
import LoginModal from "@/components/Todo/LoginModal.vue";
import TodoList from "@/components/Todo/TodoList.vue";
import { useUserIdStore } from "@/store";
import { storeToRefs } from "pinia";

export default {
  components: { Guest, LoginModal, TodoList },
  setup() {
    const userIdStore = useUserIdStore();
    const userId = storeToRefs(userIdStore);
    return userId;
  },
  data() {
    return {
      todo: "",
    };
  },
  methods: {},
};
</script>

<template>
  <v-card variant="flat">
    <LoginModal />
    <v-card v-if="this.userId">
      <v-card-text>
        <Guest :userId="this.userId" />
      </v-card-text>

      <TodoList />
    </v-card>
  </v-card>
</template>
