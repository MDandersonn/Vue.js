<template>
  <v-container>
    <h2>Vue + Spring + JPA Boards</h2>
    <router-link :to="{ name: 'JpaBoardRegisterPage' }">
      게시물 작성
    </router-link>
    <jpa-board-list :boards1="boards"/>
  </v-container>
</template>

<script>
import JpaBoardList from '@/components/lecture/board/JpaBoardList.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: { JpaBoardList },
  name: "JpaBoardListPage",
  computed: {
    ...mapState([
      'boards'
    ]),
  },
  mounted () {
    this.requestBoardListToSpring()// 마운트될때 ...mapActions에서 정의한 함수 호출, ->액션을 일으킴
  },
  methods: {
    ...mapActions([
      'requestBoardListToSpring'//액션을일으킬수있는 함수만들어줌
    ])
  }
}
</script>

<style>
</style>