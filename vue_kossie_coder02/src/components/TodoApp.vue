<template>
<!-- 컴포넌트는 자식이다. -->
  <div class="mb-2 d-flex">
    <div>
      {{todo.checked}}<input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
    </div>
      <span class="ml-3 flex-grow-1" :class="todo.checked? 'text-muted':''"
            :style="todo.checked? 'text-decoration:line-through':''">{{todo.text}}</span>
      <button class="btn btn-danger btn-sm" @click="clickDelete">delete</button>
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
      //체크박스에 변화가일어나면.  , 부모에게 보냄
      console.log(this)//this는 뷰컴퍼넌트
      console.log(this.todo)
      this.$emit('toggle-checkbox',{
        id: this.todo.id,
        checked: e.target.checked
      })
    },
    clickDelete(){
      this.$emit('click-delete',this.todo.id);
    }
    
  }

}
</script>

<style>

</style>