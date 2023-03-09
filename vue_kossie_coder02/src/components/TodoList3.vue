<template>
    <div>
        <TodoApp3 v-for="todo1 in todosa" :key="todo1.id" :todo="todo1" @toggle-checkbox="toggle"
                    @click-delete="deleteTodo"/>
            {{todosa}}
    </div>
</template>

<script>
import TodoApp3 from '@/components/TodoApp3.vue'
export default {
    computed:{
        todosa(){
            // return this.$store.state.todos;

            //모듈을쓸때 state.모듈이름.배열이름
            return this.$store.state.todo.todos;
        }
    },
    components:{
        TodoApp3
    },
    methods:{
        toggle(value){
            this.$emit('toggle-checkbox',value)

        },
        deleteTodo(todoId){
            this.$emit('click-delete',todoId)

        }
    }


}
</script>

<style>

</style>