<script>
export default {
  data: () => ({
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },
      { text: "Conversions", icon: "mdi-flag" },

      { text: "Conversions", icon: "mdi-flag" },
      { text: "finished!", icon: "mdi-flag" }, // 여기 봐바 보이면 응답점 dd 여기 finished 보고,보임?dd 된거아님?아니이게
    ],
  }),
}; //푸터가 아래에 박히고 안에서돌아야하는데 그게안ㄱㄷㄱㄷ
// 원래모양보여줌   댐 아 ㅇㅋㅇㅋ
// 저안에서돌아야하는데 밑으로내려감 봐봐
// 커밋하고 푸시해보셈 내가 확인해봄
</script>
<template>
  <v-card class="mx-auto pa-4">
    <v-list class="foo">
      <v-list-subheader>T O D O S</v-list-subheader>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title> <div v-text="item.text"></div></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>
.foo {
  padding-bottom: 75px;
}
</style>
