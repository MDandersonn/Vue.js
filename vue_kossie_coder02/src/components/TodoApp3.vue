<template>
<!-- 컴포넌트는 자식이다. -->
  <div class="mb-2 d-flex">
    <div>
      {{todo.checked}}<input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
    </div>
      <span class="ml-3 flex-grow-1" :class="todo.checked? 'text-muted':''"
            :style="todo.checked? 'text-decoration:line-through':''">{{todo.text}}</span>
      <button class="btn btn-danger btn-sm" @click="clickDelete">delete</button>
      {{numberOfCompletedTodo}}
    </div>
</template>

<script>
export default {
  props:{
    todo:{//부모에서 받아온 속성명
      type: Object,
      required:true

    }
  },
  methods:{
    toggleCheckbox(e){
      
      // this.$store.commit("TOGGLE_TODO",{id:this.todo.id, checked:e.target.checked})

      // this.$store.dispatch('TOGGLE_TODO1',{id:this.todo.id, checked:e.target.checked})
      // 모듈을사용할때 mutation으로 보낼때는 모듈명/mutation명
      this.$store.dispatch('todo/TOGGLE_TODO1',{id:this.todo.id, checked:e.target.checked})
    },
    clickDelete(){
      // this.$store.commit("DELETE_TODO",this.todo.id)

      // this.$store.dispatch("DELETE_TODO1",this.todo.id)
      this.$store.dispatch("todo/DELETE_TODO1",this.todo.id)
    }
    
  },
  computed:{
    numberOfCompletedTodo(){
        // return this.$store.getters.numberOfCompletedTodo;

        // 모듈을사용할떄. [모듈명/getters명]
        return this.$store.getters['todo/numberOfCompletedTodo'];
    }
  }

}
</script>

<style>

</style>