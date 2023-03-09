<template>
  <div>
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
            <td>게시물 번호</td>
            <td>
                <input type="text" :value="board0.boardId" disabled/>
            </td>
        </tr>
        <tr>
            <td>제목</td>
            <td>
                <input type="text" v-model="title"/>
            </td>
        </tr>
        <tr>
            <td>작성자</td>
            <td>
                <input type="text" :value="board0.writer" disabled/>
            </td>
        </tr>
        <tr>
            <td>등록일자</td>
            <td>
                <input type="text" :value="board0.regDate" disabled/>
            </td>
        </tr>
        <tr>
            <td>본문</td>
            <td>
                <textarea cols="50" rows="20" v-model="content"/>
            </td>
        </tr>
      </table>

      <div>
        <button type="submit">수정 완료</button>
        <router-link :to="{ name: 'JpaBoardReadPage',
                            params: { boardId: board0.boardId.toString() } }">
          취소
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "JpaBoardModifyForm",
    props: {
        board0: {//컴퍼넌트 속성에서 받아온 1개의 게시물에대한 정보
            type: Object,
            required: true,
        }
    },
    data () {
        return {
            title: '',
            content: '',
            writer: '',
            regDate: '',
        }
    },
    created () {
        this.title = this.board0.title
        this.writer = this.board0.writer
        this.content = this.board0.content
        this.regDate = this.board0.regDate
    },
    methods: {
        onSubmit () {//수정완료를 클릭했을때, 
            const { title, content, writer } = this
            console.log("자식this : ",this);
            console.log("자식{ title, content, writer } :", { title, content, writer } );// 객체 전달.{title: '55', content: '5', writer: '작성자6'}
            this.$emit('submit', { title, content, writer })//부모컴퍼넌트의 submit이벤트도 작동하게끔 한다. 
        }
    }
}
</script>

<style>
</style>