<template>
    <div>
        <h1>UserList</h1>
        <div v-for="user in users" :key="user.id">
            {{user.name}}
        </div>
    </div>
  
</template>

<script>
    import axios from 'axios';
export default {
    // data(){
    //     return{
    //         users:[]
    //     }
    // },
    created(){
        //요청을보내고 프로미스가 리턴이되면 결과값을 확인할 수 있다.
        
        this.getUsers();
        //위에서 요청보내놓고 바로 여기아래로 넘어간다. . 결과가오면 그떄서야 res=>{}가 실행됨
        console.log("axios응답보다 빠르다.");
    },
    methods:{
        
        getUsers(){
        //     axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
        //         console.log(res,"응답이왔습니다.");
        //         this.users= res.data;
        // })
        // actions을 사용하면서 이렇게 바꿈
            this.$store.dispatch('getUsers');//payload가 없어서 아무것도 안넣어줘도됨
        }

    },
    computed:{
        users(){//유저스를 가져옴
            return this.$store.state.users;
        }
    
    },
    

}
</script>

<style>

</style>