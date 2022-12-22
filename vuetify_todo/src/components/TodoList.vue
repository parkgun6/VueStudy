<script>
import ModalTest from "@/components/ModalTest.vue";

export default {
  components: { ModalTest },
  data() {
    return {
      todo: "",
    };
  },
};
</script>

<template>
  <v-text-field v-model="todo" label="Todo" required></v-text-field>
  <ModalTest />
</template>
