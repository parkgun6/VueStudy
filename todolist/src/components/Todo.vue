<template>
  <button class="list-group-item text-right" @click="clickButton">
    {{ label }}
  </button>
</template>
<script>
export default {
  props: ['label'],
  methods: {
    clickButton() {
      this.$emit('componentClick');
    },
  },
};
</script>
