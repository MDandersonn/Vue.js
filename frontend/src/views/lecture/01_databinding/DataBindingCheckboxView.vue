<template>
<div>
    <!-- 체크박스는 value값과 양방향바인딩이아니라. checked의 true/false 여부. checked속성과 양방향데이터바인딩되는것 -->
    <div>
        <!-- name이 아니라 v-model을 같은걸로 묶음 -->
        <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLang">
        <!-- label태그랑 연결하기위해 id사용 -->
        <label for="html">HTML</label>
    </div>
    <div>
        <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLang">
        <!-- label태그랑 연결하기위해 id사용 -->
        <label for="css">CSS</label>
    </div>
    <div>
        <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLang">
        <!-- label태그랑 연결하기위해 id사용 -->
        <label for="js">JS</label>
    </div>
    <!-- 배열을 알아서 문자로 보여줌 -->
    <div>선택한 지역: {{favoriteLang}}</div>
</div>
</template>

<script>
export default {
    data(){
        return{
            favoriteLang:['JS']

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
 