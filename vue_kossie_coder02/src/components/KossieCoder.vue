<template>
    <div>
        <hr>
        <h1>싱글 파일 컴포넌트 사용하기</h1>
        <slot name="one" :pp="kossie"></slot>
        <p>{{name}}</p>
        <slot name="two"></slot>
        <button @click="updateName">change Name</button>
        <slot></slot>
        <hr>

        <h1>(부모가 자식컴퍼넌트에 데이터보내기)props 이용</h1>
        <p>{{title}}</p>
        <hr>
    </div>
    
</template>

<script>


export default {
    // props를 셋팅해놓으면 title을 속성으로 받을 것 이라는 얘기 위에서 props를 사용함.
    // props:['title'],
    // 아래처럼할수도있다.
    props:{
        title:{//속성명
            type:String, //String타입만 받겠다는 의미.
            // required:true //무조건 항상 보내줘야함(속성설정필수)
            default: 'default title'
        }//주의 !   받은 props는 컴퍼넌트에서 수정하면 안된다. 
        //(수정하고싶을때는.자식에서, 메서드로 값을 변경하지말고 이벤트로 부모에게 보내서 부모에서 바꿔야함)
    },
    data(){
        return{//주의 : 속성명과 데이터명이 일치하지않게할것.
            name: 'kossie coder',
            kossie:'coder'
        }
    },
    methods:{
        updateName(){
            this.name = 'Kossie Coder Updated';
        }
    }
    
}
</script>

<style scoped>

</style>
