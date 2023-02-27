<template>
  <div class="todo container">
    <h1 class="text-center">Todo App</h1>
    <input type="text" class="w-100 p-2" placeholder="Type todo" 
          v-model="todoText"
          @keyup.enter="addTodo">
    <TodoApp v-for="todo1 in todos" :key="todo1.id" :todo="todo1" @toggle-checkbox="toggle"
            @click-delete="deleteTodo"/>
    {{todos}}
   
  </div>
</template>

<script>
import TodoApp from '@/components/TodoApp.vue';
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
    TodoApp,
    
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


    }
    
  }
  
}
</script>
