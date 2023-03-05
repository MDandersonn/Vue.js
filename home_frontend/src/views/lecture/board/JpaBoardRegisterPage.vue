<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
import { mapActions } from 'vuex'

export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring'
            // requestCreateBoardToSpring(){this.$store.dispatch('requestCreateBoardToSpring')}
            // 위 함수를 만들어준것 이것을 사용하려면  호출을해야한다. 밑에서 payload를 담아서 매개변수를 넣어서
            //호출을 해준것이다.
        ]),
        async onSubmit (payload) {//작성정보 들어옴
            await this.requestCreateBoardToSpring(payload)
            await this.$router.push({
                name: 'JpaBoardListPage'
            })
        }
    }
}

</script>

<style>

</style>