<template>
    <div>
        <h1>자식이 부모컴퍼넌트로 데이터보내기</h1>
        <label for="">방법3:v-model 이용</label>

        <input type="text" :value="value" style="padding: 30px; border:1px solid red;"
                @input="$emit('input', $event.target.value)">
    </div>
    
</template>

<script>
export default {
    props:{
        // 부모에서 v-model을 사용하면  그 값이 자식에게 value속성명으로 값을 받음
        value:{
            type:String,
            required:true
        }
    },
    methods:{
     
    }
}
</script>