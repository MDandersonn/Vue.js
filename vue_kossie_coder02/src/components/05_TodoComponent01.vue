<template>
<!-- 컴포넌트는 자식이다. -->
  <div class="mb-2 d-flex">
    <div>
      {{prp.checked}}<input type="checkbox" :checked="prp.checked" @change="toggleCheckbox">
    </div>
      <span class="ml-3 flex-grow-1" :class="prp.checked? 'text-muted':''"
            :style="prp.checked? 'text-decoration:line-through':''">{{prp.text}}</span>
      <button class="btn btn-danger btn-sm" @click="clickDelete">delete</button>
    </div>
</template>

<script>
export default {
  props:{
    prp:{//부모에서 받아온 속성명
      type: Object,
      required:true

    }
  },
  methods:{
    toggleCheckbox(e){
      //체크박스에 변화가일어나면.  , 부모에게 보냄
      console.log(this)//this는 뷰컴퍼넌트
      console.log(this.prp)
      this.$emit('toggle-checkbox',{
        id: this.prp.id,
        checked: e.target.checked
      })

      //아래처럼 해도된다
      
      // const p= {
      //   id: this.prp.id,
      //   checked: e.target.checked
      // };
      // this.$emit('toggle-checkbox',p)
    },
    clickDelete(){
      this.$emit('click-delete',this.prp.id);
    }
    
  }

}
</script>

<style>

</style>