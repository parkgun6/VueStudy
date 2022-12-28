<script>
import { useUserIdStore } from "@/store";

export default {
  mounted() {
    // 최초 렌더링시 실행되는 함수
    this.login();
  },
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    login() {
      const userIdPinia = useUserIdStore();

      this.$swal.fire("Please Input Your UserID");
      this.$swal
        .fire({
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          title: "Please Input Your UserId",
          input: "text",
          confirmButtonText: "L O G I N",
          preConfirm: (userId) => {
            this.userId = userId;
            userIdPinia.setUserId(this.userId);
            console.log(userIdPinia.getUserId);
          },
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$swal.fire("W E L C O M E!", this.userId, "success");
          } else if (result.isDenied) {
            this.$swal.fire("Changes are not saved", "", "info");
          }
        });
    },
  },
};
</script>

<template>
  <v-card
    class="d-flex"
    text="T O D O L I S T"
    variant="outlined"
    flex="6"
    min-height="60px"
    max-height="60px"
  >
    <v-card-actions>
      <v-btn variant="outlined" @click="this.login"> USER ID </v-btn>
    </v-card-actions>
  </v-card>
</template>
