<script>
import ModalComp from '../../common/modal/index.vue';

export default {
  data() {
    return {
      inputUserid: '',
      userId: '',
      modal: false,
      title: 'asdasd',
      msg: 'asdasd',
      status: false,
    };
  },
  watch: {},
  methods: {
    setUserId() {
      this.userId = this.inputUserid;
    },
    statusChange() {
      this.status = !this.status;
    },
    test() {
      console.log('test');
    },
    warning() {},
  },
  components: { ModalComp },
};
</script>

<template>
  <div class="inputUserId">
    <b-button @click="modal = !modal"> Toggle modal </b-button>
    <b-modal
      v-model="modal"
      title="W E L C O M E !"
      ok-only
      @ok="test"
      @cancel="warning"
      @close="warning"
    >
      <b-input-group prepend="Username" class="mt-3">
        <b-form-input v-model="inputUserid" @click="setUserId"></b-form-input>
        <b-input-group-append>
          <!-- <b-button variant="primary">확인</b-button> -->
        </b-input-group-append>
      </b-input-group>
    </b-modal>
    <button @click="statusChange">modalTest</button>
    <ModalComp v-bind:title="title" v-bind:msg="msg" v-bind:status="status" />
    <br />유저아이디: {{ userId }} <br />부모상태:
    {{ status }}
  </div>
</template>
