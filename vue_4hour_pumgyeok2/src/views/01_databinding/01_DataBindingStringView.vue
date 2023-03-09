<template>
<!-- 템플릿 내부는 큰 태그 하나로 묶어줘야 에러가 나지 않는다 -->
<div> 
    <!-- 데이터를 h1태그안에 넣다=바인딩하다 -->
    <h1>Hello {{ userName }}</h1>
    <p>{{message}}</p>
</div>
</template><!-- html 적용하는부분 -->


<script>
    export default{ 
        data () {
            return {
                // html태그에서 사용하려는 데이터, 자바스크립트 함수에서 쓰는 데이터는 여기 Data()라는 함수안에 정의가 되어있어야 한다.
                userName: "John Doe",
                message: 'Welcome 개발자의 품격',
                arr: [],
                obj: {}
            }
        } 
    }

</script>


<style scoped>
/* scoped: 이 파일에만 적용한다는 의미 */

    .text-red{
        color: red;

    }

</style>