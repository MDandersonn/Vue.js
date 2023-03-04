<template>
<!-- 컴퍼넌트안에서 특정부분에 뭔가 끼워넣고싶을때  다시 부모에 그걸 설정해줘서 자식(컴퍼넌트)로 가져오는거구나 -->
    <div>
        <h2>슬롯사용시작</h2>
        
        <h1>슬롯사용하기1</h1>
        <slot name="one"></slot>

        <h1>슬롯사용하기2</h1>
        <slot name="two" :prp="kossie"></slot>

        <h1>슬롯사용하기3</h1>
        <slot name="three" :prp="kossie"></slot>

        <h1>슬롯사용하기4</h1>
        <slot name="four"></slot>
        
        <h1>슬롯사용하기5</h1>
        <slot name="five"></slot>

        <h1>슬롯사용하기6</h1>
        <slot></slot>
        
        <h2>슬롯사용완료</h2>
        
    </div>
    
</template>

<script>


export default {

    data(){
        return{
            kossie:'속성값'
        }
    },
    methods:{
       
    }
    
}
</script>

<style scoped>

</style>
