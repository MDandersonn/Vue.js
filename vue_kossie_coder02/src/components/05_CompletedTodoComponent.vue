<template>
  <div>
    Completed Todo:{{numberOfCompletedTodo}}
  </div>
</template>

<script>
export default {
    props:{
        todosq:{
            type:Array,
            required:true
        }
    },
    computed:{
    numberOfCompletedTodo(){
        return this.todosq.filter(todo=> todo.checked).length;
    }
}
}

</script>

<style>

</style>