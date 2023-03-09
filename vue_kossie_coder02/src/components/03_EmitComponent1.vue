<template>
    <div>
        <h1>자식이 부모컴퍼넌트로 데이터보내기</h1>
        <label for="">방법1</label>
        <!-- prp는 props로 부모에게서 자식으로 넘겨받은값 -->
        <input type="text" :value="prp" style="padding: 30px; border:1px solid red;"
                @input="updateName">
                <!-- 입력할때마다 이벤트작동. -->

    </div>
    
</template>

<script>
export default {
    props:{
        prp:{
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