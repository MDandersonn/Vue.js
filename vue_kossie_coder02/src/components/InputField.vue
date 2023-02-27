<template>
    <div>
        <h1>자식이 부모컴퍼넌트로 데이터보내기</h1>
        <label for="">방법1</label>
        <!-- name2는 props로 부모에게서 자식으로 넘겨받은값 -->
        <input type="text" :value="name2" style="padding: 30px; border:1px solid red;"
                @input="updateName">
                <!-- 입력할때마다 이벤트작동. -->
                <!-- 방법2) 아래와같이 바로 써줘도 된다. -->
                <!-- @input="$emit('update-name', $event)" -->
    </div>
    
</template>

<script>
export default {
    props:{
        name2:{
            type:String,
            required:true
        }
    },
    methods:{
        updateName(e){
            console.log(e.target.value);
            // 부모 컴퍼넌트로 값을 보내주고
            //         (이벤트이름, 올리고싶은값)
            this.$emit('update-name', e.target.value);
        }
    }
}
</script>