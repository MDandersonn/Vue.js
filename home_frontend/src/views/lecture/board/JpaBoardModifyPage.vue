<template>
  <v-container>
    <div align="center">
      <h2>게시물 수정</h2>
      <jpa-board-modify-form v-if="board" :board0="board" @submit="onSubmit"/>
      <p v-else>로딩중 ........</p>
    </div>
  </v-container>
</template>

<script>
import JpaBoardModifyForm from '@/components/lecture/board/JpaBoardModifyForm.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: { JpaBoardModifyForm },
    name: "JpaBoardModifyPage",
    props: {
        boardId: {//게시물수정클릭했을때, router에 담겨서 온 param
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['board'])//board(){return this.$store.state.board;} 를 정의
    },
    methods: {
        ...mapActions([
            'requestBoardToSpring',////requestBoardToSpring(){return this.$store.dispatch('requestBoardToSpring')}을 정의
            'requestBoardModifyToSpring',//requestBoardModifyToSpring(){return this.$store.dispatch('requestBoardModifyToSpring')}을 정의
        ]),
        async onSubmit (payload) { //수정완료를 클릭했을때 , { title, content, writer }들어옴
            const { title, content, writer } = payload
            console.log("부모{ title, content, writer } : ",{ title, content, writer })//객체 전달.{title: '55', content: '5', writer: '작성자6'}
            console.log('부모payload : ', payload)//객체 전달.{title: '55', content: '5', writer: '작성자6'}
            const boardId = this.boardId
            await this.requestBoardModifyToSpring({ boardId, title, content, writer })//액션실행
            await this.$router.push({
                name: 'JpaBoardReadPage',
                params: { boardId: this.boardId }
            })
        }
    },
    created () {
        this.requestBoardToSpring(this.boardId)//1개의 게시물정보를 받아와서 state의 board객체를 수정하게함.
    }
}
</script>

<style>
</style>