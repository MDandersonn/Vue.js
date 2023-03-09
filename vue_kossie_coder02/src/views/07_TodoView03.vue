<template>
  <div class="todo container">
    <h1 class="text-center">데이터를 store(Mutation)에서 관리</h1>
    <CompletedTodo02 />
    <AddTodo02 />
    <TodoList02 />
    <UserList02 />
  </div>
</template>

<script>
import TodoList02 from "@/components/07_TodoList02.vue";
import AddTodo02 from "@/components/07_AddTodo02.vue";
import CompletedTodo02 from "@/components/07_CompletedTodo02.vue";
import UserList02 from "@/components/07_UserList02.vue";

export default {
  data() {
    return {
      todoText: "",
      //데이터 state로 이동
      // todos:[
      //   {id:1,text: 'buy a car',checked:false},
      //   {id:2,text: 'play game',checked:false},

      // ]
    };
  },
  components: {
    TodoList02,
    AddTodo02,
    CompletedTodo02,
    UserList02

  },
  methods: {
    addTodo(e) {
      // console.log(e);
      // this.todos.push({
      //   id: Math.random(),
      //   text: e.target.value,
      //   checked: false,
      // });
      // this.todoText = "";
    },
    // 자식에게서 보내온 데이터를 그대로받음.
    //기본개념@
    // const p= {kossie:1, coder:2}
    //const {kossie} =p ;
    //p.kossie   //1출력
    //kossie //1출력
    toggle({ id, checked }) {
      // console.log(id, checked);
      // //받아온 id랑 같은 id를 todos리스트에서 찾음.
      // const index = this.todos.findIndex((todoo) => {
      //   return todoo.id === id;
      // });
      // this.todos[index].checked = checked;
      // //todos리스트의 데이터값을 변경함.
    },
    deleteTodo(id) {
      // const index= this.todos.findIndex(todoo =>{
      //   return todoo.id===id;
      // });
      // this.todos.splice(index,1);

      // this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>
