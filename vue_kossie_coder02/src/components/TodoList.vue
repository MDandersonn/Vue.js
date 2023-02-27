<template>
    <div>
        <TodoApp v-for="todo1 in todos1" :key="todo1.id" :todo="todo1" @toggle-checkbox="toggle"
                    @click-delete="deleteTodo"/>
            {{todos1}}
    </div>
</template>

<script>
import TodoApp from '@/components/TodoApp.vue'
export default {
    props:{
        todos1:{
            type:Array,
            required:true
        }
    },
    components:{
        TodoApp
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