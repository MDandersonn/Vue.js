<template>
  <div class="todo container">
    <h1 class="text-center">데이터를 store(Actions,Getters,MapHelper)에서 관리</h1>
    <CompletedTodo03 />
    <AddTodo03 />
    <TodoList03 />
    <UserList03 />
  </div>
</template>

<script>
import TodoList03 from "@/components/08_TodoList03.vue";
import AddTodo03 from "@/components/08_AddTodo03.vue";
import CompletedTodo03 from "@/components/08_CompletedTodo03.vue";
import UserList03 from "@/components/08_UserList03.vue";

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
    TodoList03,
    AddTodo03,
    CompletedTodo03,
    UserList03,
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
