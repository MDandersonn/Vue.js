<template>
  <div class="todo container">
    <h1 class="text-center">여러 컴포넌트의 자식의 자식 연결</h1>
    <CompletedTodo :todosq="todos" />
    <AddTodo @add-todo="addTodo" />
    <TodoList :todos1="todos" @toggle-checkbox="toggle" @click-delete="deleteTodo"/>
   
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
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
    TodoList,
    AddTodo,
    CompletedTodo
  },
  methods:{
    addTodo(e){
      console.log(e)
      this.todos.push({
        id:Math.random(),
        text:e.target.value,
        checked:false
      })
      this.todoText='';
    },
    // 자식에게서 보내온 데이터를 그대로받음.
    //기본개념@
          // const p= {kossie:1, coder:2}
          //const {kossie} =p ;
          //p.kossie   //1출력
          //kossie //1출력
    toggle({id,checked}){
      console.log(id,checked) 
      //받아온 id랑 같은 id를 todos리스트에서 찾음.
      const index= this.todos.findIndex(todoo =>{
        return todoo.id===id;
      });
      this.todos[index].checked=checked;
      //todos리스트의 데이터값을 변경함.
    },
    deleteTodo(id){
      // const index= this.todos.findIndex(todoo =>{
      //   return todoo.id===id;
      // });
      // this.todos.splice(index,1);

      this.todos= this.todos.filter(todo => todo.id !==id);
    },
   
    
  }
  
}
</script>
