<template>
    <div>
        <TodoComponent01 v-for="todo1 in prp0" :key="todo1.id" :prp="todo1" @toggle-checkbox="toggle"
                    @click-delete="deleteTodo"/>
            {{prp0}}
    </div>
</template>

<script>
import TodoComponent01 from '@/components/05_TodoComponent01.vue'
export default {
    props:{
        prp0:{
            type:Array,
            required:true
        }
    },
    components:{
        TodoComponent01
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