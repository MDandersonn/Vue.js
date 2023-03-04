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
    //맵헬퍼함수 임포트
    import {mapState, mapActions} from 'vuex';
export default {
    created(){
        //요청을보내고 프로미스가 리턴이되면 결과값을 확인할 수 있다.
        
        this.getUsers();
        //위에서 요청보내놓고 바로 여기아래로 넘어간다. . 결과가오면 그떄서야 res=>{}가 실행됨
        console.log("axios응답보다 빠르다.");
    },
    methods:{//mapActions랑  mapMutations는 메서드 안에 넣어야함.
        

        //mapActions
        // ...mapActions(['getUsers']),
        //이렇게하면 함수처럼  사용가능하다. getUsers(){this.$store.dispatch('getUsers');} 와 같은의미

   //index.js에 actions를 지우고 모듈로 옮겼다면 아래와 같이 바꿔줘야한다.
                //모듈을쓸때     (모듈명,[action명])
        ...mapActions('user',['getUsers']),

    },
    computed:{//mapState랑 mapGetters는 computed에넣음

    
        //state를 불러올수있따. users(){return this.$store.state.users;} 대신에 이렇게 불러오는것.
        // ...mapState([
        //     'todos',
        //     'users' 
        // ]),
        //이름바꾸는방법!! : people이라는 변수를 users대신에 쓰고싶을때는 :  ...mapState({people:'users'})

        //index.js에 state를 지우고 모듈로 옮겼다면 아래와 같이 바꿔줘야한다.(3가지 방법이 있다.)
          //모듈을쓸때
        ...mapState({
            users : state=>state.user.users
            
        }),
        //모듈쓸떄 이렇게 모듈명을 앞으로 뺄수도있고
        //  ...mapState('user',{
        //     users : state=>state.users
        // }),

        // 모듈쓸때 이렇게도 됨
        // ...mapState('user',['users']),
     
    },
    

}
</script>

<style>

</style>