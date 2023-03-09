<template>
    <div>
        <TodoComponent04 v-for="todo1 in todosa" :key="todo1.id" :prp="todo1" @toggle-checkbox="toggle"
                    @click-delete="deleteTodo"/>
            {{todosa}}
    </div>
</template>

<script>
import TodoComponent04 from '@/components/09_TodoComponent04.vue'
export default {
    computed:{
        todosa(){
            // return this.$store.state.todos;

                //모듈을쓸때 state.모듈이름.배열이름
            return this.$store.state.todo.todos;
        }
    },
    components:{
        TodoComponent04
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