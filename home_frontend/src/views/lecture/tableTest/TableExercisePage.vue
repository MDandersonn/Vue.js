<template>
  <v-container>
    <v-data-table 
        :headers="headerTitle" 
        :items="boards"
        :items-per-page="10"
        @click:row="readRow"
        show-select
        class="elevation-1"
        item-key="boardId"
        v-model="selectedItems"
        />
  </v-container>
  <!-- item-key 는 items에 셋팅된것의 데이터를 볼수있어서 boards의 boardId를 가져온것 이다. -->
</template>

<script>
import router from "@/router"
import { mapActions, mapState } from 'vuex'
export default {
    name: "TableExercisePage",
    data () {
        return {
            headerTitle: [
                { text: '번호', value: 'boardId', width: "70px" },
                { text: '제목', value: 'title', width: "200px" },
                { text: '작성자', value: 'writer', width: "100px" },
                { text: '등록일자', value: 'regDate', width: "100px" },
            ],
            selectedItems: [],//선택된아이디 
            //boardsWithSelected: [this.boards.map(x => ({...x, isSelectable: false}))],
        }
    },
    computed: {
        ...mapState([
            'boards'
        ]),
    },
    mounted () {
        this.requestBoardListToSpring()
    },
    beforeUpdate () {
        // alert(JSON.stringify(this.selectedItems))
        console.log('selected: '+ JSON.stringify(this.selectedItems))
    },
    methods: {
        ...mapActions([
            'requestBoardListToSpring'
        ]),
        readRow (readValue) {
            alert("게시물 읽기: " + JSON.stringify(readValue))
            router.push({
                name: 'JpaBoardReadPage',
                params: { boardId: readValue.boardId.toString() }
            })
        }
    }
}
</script>

<style scoped>
</style>