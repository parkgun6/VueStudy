<script>
export default {
  props: ['title', 'msg', 'status'],
  computed: {
    changeStatus: function () {
      this.modal = this.status;
    },
  },
  watch: {
    modal() {
      if (this.modal === true) {
        this.modal = false;
        console.log('aaaa');
      }
    },
  },
  data() {
    return {
      modal: this.status,
    };
  },
};
</script>
<template>
  <b-button @click="modal = true">asdasd</b-button>
  <b-modal v-model="modal" v-bind:title="title" ok-only />
</template>
