<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>상품명</td>
        <td>
          <input type="text" v-model="productName"/>
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
      <tr>
        <td>가격</td>
        <td>
          <input type="number" v-model="price"/>
        </td>
      </tr>
      <tr>
        <td>사진 추가</td>
        <td>
          <input type="file" id="files123" ref="files" multiple @change="handleFileUpload"/>
        </td>
      </tr>
    </table>

    <div>
      <button type="submit">등록</button>
      <router-link :to="{ name: 'JpaProductListPage' }">
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
            productName: '상품명을 입력하세요.',
            writer: '누구세요 ?',
            content: '내용을 입력하세요.',
            price: 0,
            files1: '',//올린 파일정보 담아줌
        }
    },
    methods: {
        onSubmit () {//상품등록을 눌렀을때
           let formData = new FormData()
            for (let idx = 0; idx < this.files1.length; idx++) {
                 formData.append('imageFileList', this.files1[idx])
            }

            const { productName, writer, content, price } = this
            // this.$emit('submit', { productName, writer, content, price })//삭제
            let productInfo = {
                productName: productName,
                writer: writer,
                content: content,
                price: price,
            }
            console.log('productInfo: ' + productInfo)
            console.log('JSON.stringify(productInfo): ' + JSON.stringify(productInfo))
            formData.append("productInfo",
                              new Blob([JSON.stringify(productInfo)], { type: "application/json" })
            )
            console.log('formData :' + formData)
            console.log('JSON.stringify(formData) :' + JSON.stringify(formData))
            for (var key of formData.keys()) {
              console.log('key:' ,key);
            }
            for (var value of formData.values()) {
              console.log('value: ', value);
            }

            this.$emit('submit', formData)//사진정보랑 글자입력정보랑 같이 보내줌.
        },
        handleFileUpload () {
            this.files1 = this.$refs.files.files//  올린 파일정보 data() file1에 담음
        },
        
    }
}

</script>

<style>

</style>