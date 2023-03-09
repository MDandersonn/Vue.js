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
    import {mapState, mapActions} from 'vuex';
export default {
    // data(){
    //     return{
    //         users:[]
    //     }
    // },
    computed:{//뷰엑스를 사용하면서 이렇게 바꿈
        // ...mapState([
        //     'todos',
        //      'users' 
        // ]),

          //모듈을쓸때
        // ...mapState({
        //     users : state=>state.user.users
            
        // }),
        //모듈쓸떄 이렇게 모듈명을 앞으로 뺄수도있고
        //  ...mapState('user',{
        //     users : state=>state.users
            
        // }),

        // 모듈쓸때 이렇게도 됨
        ...mapState('user',['users']),


        //people이라는 변수를 users대신에 쓰고싶을때는 :  ...mapState({people:'users'})

        //이렇게 아래와 같이 추가하지말고 mapState를 사용한다.
        // users(){
        //     return this.$store.state.users;
        // },
        // todos(){
        //     return this.$store.state.todos;
        // }
    },
    created(){
        //요청을보내고 프로미스가 리턴이되면 결과값을 확인할 수 있다.
        
        this.getUsers();
        //위에서 요청보내놓고 바로 여기아래로 넘어간다. . 결과가오면 그떄서야 res=>{}가 실행됨
        const a="axios응답보다 빠르다.";
        console.log(a);
    },
    methods:{
        //모듈을쓸때     (모듈명,[action명])
        ...mapActions('user',['getUsers']),

        //mapActions
        // ...mapActions(['getUsers']),
        //이렇게하면 함수처럼 사용가능하다.

/*mapActions를 사용하면서 주석처리.
        getUsers(){
        //     axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
        //     console.log(res);
        //     this.users= res.data;
        // })
        
        //뷰엑스 action을 사용하면서 이렇게 바꿈
            this.$store.dispatch('getUsers');

        }
*/
    }

}
</script>

<style>

</style>