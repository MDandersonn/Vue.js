<template>
  <v-container>
    <div align="center">
      <h2>Vue + Spring 게시판 읽기</h2>
      <jpa-board-read v-if="board" :board="board"/>
      <!-- 게시물이 존재하지않는다면 로딩중이라고 뜨게함.  -->
      <p v-else>로딩중 .......... </p>
       <router-link :to="{ name: 'JpaBoardModifyPage', params: { boardId } }">
        게시물 수정
      </router-link>
      <button @click="onDelete">삭제</button>
      <router-link :to="{ name: 'JpaBoardListPage' }">
        돌아가기
      </router-link>
    </div>
  </v-container>
</template>

<script>
import JpaBoardRead from '@/components/lecture/board/JpaBoardRead.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: { JpaBoardRead },
    name: "JpaBoardReadPage",
    props: {
        boardId: {//라우터에서 param에 담겨온 boardId
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['board'])//board(){return this.$store.state.board;} 를 정의
    },
    methods: {
        ...mapActions([//requestBoardToSpring(){return this.$store.dispatch('requestBoardToSpring')}을 정의
            'requestBoardToSpring',
            'requestDeleteBoardToSpring'
        ]),
        async onDelete () {
            await this.requestDeleteBoardToSpring(this.boardId)
            await this.$router.push({ name: 'JpaBoardListPage' })
        },
    },
    
    created () {
        console.log('보드리드페이지의 boardId: ' + this.boardId)
        this.requestBoardToSpring(this.boardId)
    }
}
</script>

<style>
</style>