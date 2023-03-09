<template>
<div>
   <div :class="{'text-red': hasError, 'active':isActive}">클래스 바인딩</div>
   <!-- 클래스명을 여러개 넣을수 있는데
   오브젝트형태에서 키 ,밸류에서  키는 클래스명  밸류는 t면 들어가고 f면 안들어가고 라는말
   클래스명에 - 가 들어가면 ' ' 로 묶어줘야하고 한 단어면 ' ' 로 안묶어도 됨
    -->

    <div :class="class2">클래스 바인딩2</div>
     <div :class="{'text-red': true, active:true}">클래스 바인딩3</div>
</div>
</template>

<script>
export default {
    data(){
        return{
            isActive: false,
            hasError: false,
            class2:['active','text-red']

            

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
 