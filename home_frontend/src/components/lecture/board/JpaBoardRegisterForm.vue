<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>제목</td>
        <td>
          <input type="text" v-model="title"/>
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input type="text" v-model="writer"/>
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
      <button type="submit">등록</button>
      <router-link to="{ name: 'JpaBoardListPage' }">
        취소
      </router-link>
    </div>
  </form>
</template>

<script>

export default {
    name: "JpaBoardRegisterForm",
    data () {
        return {
            title: '제목을 입력하세요.',
            writer: '누구세요 ?',
            content: '내용을 입력하세요.'
        }
    },
    methods: {
        onSubmit () {
            console.log(this)
            const { title, writer, content } = this
            console.log({ title, writer, content })
            this.$emit('submit', { title, writer, content })
            // this.$emit('submit', { 
            //   title:this.title, 
            //   writer:this.writer, 
            //   content:this.content 
            //   })
              // 부모컴퍼넌트의 submit이벤트 실행
        }
    }
}

</script>

<style>

</style>