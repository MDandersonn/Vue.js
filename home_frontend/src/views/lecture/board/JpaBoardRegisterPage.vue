<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    computed: {
        ...mapState(['board'])//board(){return this.$store.state.board;} 를 정의
        
    },
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring'
            // requestCreateBoardToSpring(){return this.$store.dispatch('requestCreateBoardToSpring')}
            // 위 함수를 만들어준것 이것을 사용하려면  호출을해야한다. 밑에서 payload를 담아서 매개변수를 넣어서
            //호출을 해준것이다.
        ]),
        async onSubmit (payload) {//작성정보 1들어옴  //{ title, writer, content }
            await console.log("action처리 전 this: ",this)//뷰객체
            await console.log("action처리 전 this.board", this.board)//뷰
            await console.log("action처리 전 this.board.boadId", this.board.boardId)//뷰
            await this.requestCreateBoardToSpring(payload)//게시물 등록 성공
            await console.log("this.$store: ", this.$store)
            await console.log("this.$store.state: ", this.$store.state)
            await console.log("this.$store.state.board: ", this.$store.state.board)
            await console.log("this.$store.state.board.boardId: ", this.$store.state.board.boardId)
            await console.log("action처리후 this ", this)//뷰객체
            await console.log("action처리후 this.board", this.board)//뷰
            await console.log("action처리후 this.board.boardId", this.board.boardId)//뷰
            await this.$router.push({
                // name: 'JpaBoardListPage'
                name: 'JpaBoardReadPage',
                // params: { boardId: this.$store.state.board.boardId.toString()}
                params: { boardId: this.board.boardId.toString()}
            })
        }
    }
}

</script>

<style>

</style>