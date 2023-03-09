<template>
    <div>
        <hr>
        <h1>싱글 파일 컴포넌트 사용하기</h1>
        <p>{{name}}</p>
        <button @click="updateName">change Name</button>
        <hr>

    </div>
    
</template>

<script>

export default {
    data(){
        return{
            name: 'kossie coder',
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
