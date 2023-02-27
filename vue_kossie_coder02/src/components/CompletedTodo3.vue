<template>
  <div>
    Completed Todo:{{numberOfCompletedTodo}}
    <!-- {{ todosa }} -->
  </div>
</template>

<script>
export default {
   
    computed:{
      //getters를 사용하면서 아래가 주석처리됨
      // todosa(){
      //   // store의 state접근
      //   return this.$store.state.todos;
      // },
    numberOfCompletedTodo(){
        // return this.todosa.filter(todo=> todo.checked).length;
        
        // return this.$store.getters.numberOfCompletedTodo;
        
        // 모듈쓸때
        return this.$store.getters['todo/numberOfCompletedTodo'];
    }
}
}

</script>

<style>

</style>