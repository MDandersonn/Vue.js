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
            console.log(e)
            this.$emit('add-todo',e);
        }
    }

}
</script>

<style>

</style>