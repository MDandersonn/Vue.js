<template>
<!-- <div> -->
  <input type="text" class="w-100 p-2" placeholder="Type todo" 
          v-model="todoText"
          @keyup.enter="addTodo" />
    <!-- !!!!!{{ todoText }} -->
<!-- </div> -->
</template>

<script>
export default {
    data(){
        return{
            todoText:''
        }
    },
    methods:{
        addTodo(e){
            console.log(e,1)
            //스토어에 추가
                                //(mutation함수, 밸류값)
            // this.$store.commit('ADD_TODO',e)
        //mutation은 커밋이용
            // 액션이용방법 -dispatch이용
            // this.$store.dispatch('addTodo1',e)

            //모듈쓸때
            this.$store.dispatch('todo/addTodo1',e)

            this.todoText='';
        }
    }

}
</script>

<style>

</style>