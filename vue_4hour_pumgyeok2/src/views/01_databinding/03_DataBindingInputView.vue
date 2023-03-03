<template>
<!-- 양방향데이터바인딩에 대해 알아보자 -->
<div>
    <div>
        <input type="text" v-model="userId"/>
        <!-- v-model : value값으로 바인딩되어 값이들어감.양방향바인딩이라는 특성이 있음.
        양방향으로 데이터바인딩되는데.즉  사용자가 input밸류를 브라우저에서 수정하면 그 값이 data() 함수의 return값이 변경된다. -->
        <button @click="myFunction">클릭</button>
        <button @click="changeData">변경</button>
        <br>
        <!-- input값은 문자열로 들어간다 숫자가 아님. -->
        <input type="text" v-model="num1" /> +
        <input type="text" v-model="num2" /> =
        <span>{{num1 + num2}}</span>
        <br>
        <!-- v-model.number: 숫자로 변환해줌 -->
        <input type="text" v-model.number="num3" /> +
        <input type="text" v-model.number="num4" /> =
        <span>{{num3 + num4}}</span>
    </div>

</div>


</template>

<script>
export default {
    data(){
        return{
            userId: 'kimyj1215',
            num1 :0,
            num2 :0,
            num3 :0,
            num4 :0
        }
    },
    methods: {
        myFunction() {
            console.log(this.userId)
            // 오브젝트안에 정의된 함수에서 오브젝트안에있는 key값에 접근할때는 this사용. 그때 this는 그 오브젝트 전체를 의미.
            // 여기서 정의한 데이터 ,함수들은 뷰에서 다루고있는 뷰오브젝트안에 다 등록이되서 오브젝트안의 키값을 접근할떄는 this사용. 여기서 this는 이 뷰 를 의미.
        },
        changeData(){
            this.userId="Jeremy"

        }
    }
}
</script>


<style scoped>
input{
    border:1px solid red;
}
</style>
 