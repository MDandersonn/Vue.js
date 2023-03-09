<template>
<div>
    <div>{{htmlString}}</div>
    <!-- 뷰에서의 자바스크립트에서사용하기위해 추가되는 속성 v-html-->
    <div v-html="htmlString"></div>
    <!-- 이렇게 하면 innerHTML으로 넣어준다. -->

</div>


</template>

<script>
export default {
    data(){
        return{
            htmlString: '<p style="color:red;">빨간색문자</p>'
        }
    }
}
</script>
 