<template>
<div>
    <div>
        <!-- name이 아니라 v-model을 같은걸로 묶음 -->
        <input type="radio" name="" id="html" value="HTML" v-model="favoriteLang">
        <!-- label태그랑 연결하기위해 id사용 -->
        <label for="html">HTML</label>
    </div>
    <div>
        <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang">
        <!-- label태그랑 연결하기위해 id사용 -->
        <label for="css">CSS</label>
    </div>
    <div>
        <input type="radio" name="" id="js" value="JS" v-model="favoriteLang">
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
            favoriteLang:'JS'//하나만선택할수있으니까 문자열형태로

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
 