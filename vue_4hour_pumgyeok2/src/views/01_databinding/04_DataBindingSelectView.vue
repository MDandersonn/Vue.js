<template>
<div>
    <!-- 양방향가능 사용자가 value값 변경가능하니까. -->
   <select name="" id="" v-model="selectedCity">
    <!-- v-model로 양방향데이터처리가능. -->
        <option value="">==선택==</option>
        <option value="02">서울</option>
        <option value="051">부산</option>
        <option value="064">제주</option>
   </select>
   {{selectedCity}}
</div>
</template>

<script>
export default {
    data(){
        return{
            selectedCity: '02'

        }
    },
    methods: {

    }
}
</script>


<style scoped>
input{
    border:1px solid red;
}
</style>
 