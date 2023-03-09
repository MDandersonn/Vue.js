<template>
  <div class="todo container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodoComponent :todosq="todos"/>
    <input type="text" class="w-100 p-2" placeholder="Type todo" 
          v-model="todoText"
          @keyup.enter="addTodo">
    <TodoComponent01 v-for="todo1 in todos" :key="todo1.id" :prp="todo1" @toggle-checkbox="toggle"
            @click-delete="deleteTodo"/>
            <!-- :prp="todo1"으로 속성명을 이용하여 자식에게 todo1값 전달. -->
    {{todos}}
    <br>
    <UserList01 />
   
  </div>
</template>

<script>
import TodoComponent01 from '@/components/05_TodoComponent01.vue';
import CompletedTodoComponent from '@/components/05_CompletedTodoComponent.vue';
import UserList01 from "@/components/05_UserList01.vue";
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
    TodoComponent01,
    CompletedTodoComponent,
    UserList01
    
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
