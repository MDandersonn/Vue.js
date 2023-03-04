<template>
  <div class="todo container">
    <h1 class="text-center">손주 컴포넌트까지 자식의 자식에게 데이터 보내기</h1>
    <CompletedTodoComponent :todosq="todos"/>
    <AddTodo01 @add-todo="addTodo" />
    <TodoList01 :prp0="todos" @toggle-checkbox="toggle" @click-delete="deleteTodo"/>
    <!-- 속성명으로 자식에게 todos리스트 전달. -->
  </div>
</template>

<script>
import CompletedTodoComponent from '@/components/05_CompletedTodoComponent.vue';
import TodoList01 from '@/components/06_TodoList01.vue';
import AddTodo01 from '@/components/06_AddTodo01.vue';

export default {
  data(){
    return{
      todoText:'',
      todos:[
        {id:1,text: 'buy a car',checked:false},
        {id:2,text: 'play game',checked:false},
      ]

    }
  },
  components:{
    TodoList01,
    AddTodo01,
    CompletedTodoComponent
    
  },
  methods:{
    addTodo(e){
      this.todos.push({
        id:Math.random(),
        text:e.target.value,
        checked:false
      })
      this.todoText='';
    },
    // 자식에게서 보내온 데이터를 그대로받음.
    //기본개념@
          // const p= {kossie:1, coder:2}일때,
          //p에서 원하는것만 빼올수가있다
          //const {kossie,coder}=p;
          //p.kossie   //1출력
          //const {kossie} =p ;
          //kossie  //1출력


    toggle(p){
      console.log(p.id,p.checked) 
      // 받아온 id랑 같은 id를 todos리스트에서 찾음.
      const index= this.todos.findIndex(todoo =>{
        return todoo.id===p.id;
      });
      this.todos[index].checked=p.checked;
      //todos리스트의 데이터값을 변경함.
    },
   
    // toggle({id,checked}){
    //   console.log(id,checked) 
    //   //받아온 id랑 같은 id를 todos리스트에서 찾음.
    //   const index= this.todos.findIndex(todoo =>{
    //     return todoo.id===id;
    //   });
    //   this.todos[index].checked=checked;
    //   //todos리스트의 데이터값을 변경함.
    // },

    deleteTodo(id){
      // const index= this.todos.findIndex(todoo =>{
      //   return todoo.id===id;
      // });
      // this.todos.splice(index,1);

      // 위코드  아래코드 둘중하나로 하면된다.

      this.todos= this.todos.filter(todo => todo.id !==id);


    }
    
  }
  
}
</script>
