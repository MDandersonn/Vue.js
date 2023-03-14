<template>
  <v-container>
    <h3>Vue 파일 업로드</h3>
    <div>
      <label>Files
        <input type="file" id="files123" ref="files"
            multiple @change="handleFileUpload"/>
      </label>

      <button @click="submitFiles">파일 + 문자열 전송</button>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "FileUploadPage",
    data () {
        return {
            files1: '',//올린 파일정보 담아줌
        }
    },
    methods: {
        handleFileUpload () {
            console.log('this.$refs: ',this.$refs)
            console.log('this.$refs.files: ', this.$refs.files)//input태그출력
            console.log('this.$refs.files.files: ',this.$refs.files.files)//FileList(리스트)
            this.files1 = this.$refs.files.files 
            //올린 파일정보 data() file1에 담음
        },
        submitFiles () {
            let formData = new FormData()
            let fileinfo = {
                price: 50000,
                test: "test",
            }
            // 사진
            for (let idx = 0; idx < this.files1.length; idx++) {
                formData.append('imageFileList', this.files1[idx])
            }
            // 글자
            formData.append(
                "info",
                new Blob([JSON.stringify(fileinfo)], { type: "application/json" })
            )
            axios.post('http://localhost:7777/file/uploadImgsWithText', formData)
                .then (res => {
                    alert('처리 결과: ' + res.data)
                })
                .catch(() => {
                    alert('문제 발생!')
                })
        }
    }
}
</script>

<style>
</style>