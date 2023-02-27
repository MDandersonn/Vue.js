<template>
<div>
    <!-- <input type="search" @keyup="checkEnter($event)" v-model="searchText"> -->

<!-- 엔터를 체크할필요없이 엔터를 인식하게할수도있다. 

keyup.delete :백스페이스or delete키
keyup.down:화살표내리기
keyup.left :왼쪽화살표키... 
keyup.ctrl :컨트롤키
.stop: event.stopPropagation()
@keyup.stop="doSearch" :stop이일어나고나서 doSearch함수 실행
.prevent : event.preventDefault();

 ex) <button type="submit" @click.prevent="doSearch"></button>

-->
    <input type="search" @keyup.enter="doSearch" v-model="searchText">
    <button @click="doSearch">조회</button>
   

</div>
</template>

<script>
export default {
    data(){
        return{
            searchText:''
        

        }
    },
    methods: {
        doSearch(){
            console.log(this.searchText)

        },
        checkEnter(event){
            if(event.keyCode=== 13){
                this.doSearch()
            }
        }
      
        

    }
}
</script>


<style scoped>
input{
    border:1px solid red;
}
</style>
 