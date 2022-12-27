<script>
export default {
  props: ['title', 'msg', 'status'],
  computed: {
    changeStatus: function () {
      this.modal = this.status;
    },
  },
  methods: {
    changeModal() {
      this.modal = true;
    },
  },
  data() {
    return {
      modal: false,
      test: 'show',
    };
  },
};
</script>
<template>
  <button @click="changeModal"></button>
  <b-modal v-model="modal" v-bind:title="title" ok-only />
  <br />자식모달: {{ status }}
</template>
