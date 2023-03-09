<template>
<div>
   <div :style="style1">스타일바인딩:글씨는red 폰트크기:30px</div>
   <!-- 스타일바인딩을 오브젝트로하면됨 -->

   <button @click="style1.color = 'blue'">색상바꾸기</button>
</div>
</template>
<script>
export default {
    data(){
        return{
            style1:{
                // -로묶인거는 대문자로바꿔주면됨
                color: 'red',
                fontSize: '30px'
            }

            

        }
    },
    methods: {

    }
}
</script>


<style scoped>
.active{
    background-color: greenyellow;
    font-weight: bold;
}

.text-red{
    color:red;
}
</style>
 