<template>
  <div>
    Completed Todo:{{numberOfCompletedTodo}}<br>

    <!-- {{ todosa }} -->
  </div>
</template>

<script>
export default {
   
    computed:{
      //게터스에 등록을 하면서 주석처리
      //여기에 쓰면 state의 데이터가 바뀔때마다 업데이트되서 최신값을 유지하게해줌
      // todosa(){
      //   // store의 state접근
      //   return this.$store.state.todos;
      // },

    numberOfCompletedTodo(){
      //게터스에 등록을 하면서 주석처리
        // return this.todosa.filter(todo=> todo.checked).length;
        
        return this.$store.getters.numberOfCompletedTodo;//게터스에서 계산된값을 가져옴
        
        // 모듈쓸때
        // return this.$store.getters['todo/numberOfCompletedTodo'];
    }
}
}

</script>

<style>

</style>