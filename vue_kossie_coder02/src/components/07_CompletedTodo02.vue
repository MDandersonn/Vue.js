<template>
  <div>
    Completed Todo:{{numberOfCompletedTodo}}<br>
    {{ todosa }}
  </div>
</template>

<script>
export default {
   
    computed:{
      //여기에 쓰면 state의 데이터가 바뀔때마다 업데이트되서 최신값을 유지하게해줌
      todosa(){
        // store의 state접근
        return this.$store.state.todos;
      },

    numberOfCompletedTodo(){
        return this.todosa.filter(todo=> todo.checked).length;
        
        
        // return this.$store.getters.numberOfCompletedTodo;
        
        // 모듈쓸때
        // return this.$store.getters['todo/numberOfCompletedTodo'];
    }
}
}

</script>

<style>

</style>