<template>
  <div class="todo container">
    <h1 class="text-center">데이터를 store에서 관리</h1>
    <CompletedTodo3  />
    <AddTodo3 />
    <TodoList3 />
    <UserList />
  </div>
</template>

<script>
import TodoList3 from '@/components/TodoList3.vue';
import AddTodo3 from '@/components/AddTodo3.vue';
import CompletedTodo3 from '@/components/CompletedTodo3.vue';
import UserList from '@/components/UserList.vue';

export default {
  data(){
    return{
      todoText:'',
      // todos:[
      //   {id:1,text: 'buy a car',checked:false},
      //   {id:2,text: 'play game',checked:false},
        
      // ]

    }
  },
  components:{
    TodoList3,
    AddTodo3,
    CompletedTodo3,
    UserList
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
