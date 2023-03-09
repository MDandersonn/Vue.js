import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import user from './modules/user';
import todo from './modules/todo';
Vue.use(Vuex)//VueX를 사용하겠다는 의미

export default new Vuex.Store({
  

  state: { //데이터가들어감 data와비슷함
    todos:[
      {id:1,text: 'buy a car',checked:false},
      {id:2,text: 'play game',checked:false}
    ],
    users:[]
  },
  mutations: {//데이터를 바꿔줌 (update) 
    //state에있는 데이터를 바꿀려면 항상 뮤테이션(커밋함수)으로 접근해야한다.
    //state를 인자로넣어서 state에 접근하게끔한다.
    ADD_TODO(state,e){
      console.log(e,'2번(뮤테이션)')
      state.todos.push({
        id:Math.random(),
        text:e.target.value,
        checked:false
      })
    },
    TOGGLE_TODO(state,{id,checked}){
      const index= state.todos.findIndex(todoo =>{
        return todoo.id===id;
      });
      state.todos[index].checked=checked;

    },
    DELETE_TODO(state,todoId){
      const index= state.todos.findIndex(todoo =>{
        return todoo.id===todoId;
      });
      state.todos.splice(index,1);
    },
    SET_USERS(state,users){
      state.users=users;
    }
  },
  actions: {
    
    //actions안에는 함수가 들어가는데 비동기작업을하고 , state에있는 데이터를 변경할때 사용
    //데이터베이스에 새로운 todo를 저장해달라고 요청하고 응답을 받을떄까지 시간이 좀걸리는데 그걸 보내놓고 다른작업을
    //이어나가게 됨
              //{ } 가 context인데 , context에 commit도들어있고 dispatch도 들어있음.
    addTodo1({commit},e) {
      console.log(e,'3번(액션)');
      //액션을 거친후 뮤테이션으로 감
      // commit('ADD_TODO',e);
      
      // 여기서 비동기작업 들어감.
      // 보통 axios를 요청을보낼때 많이씀  axios.post() 로 value를 보내주고 응답이오면 커밋 뮤테이션해주고 그다음 state변경
      // 그대신 setTimeOut으로 연습해보자

      setTimeout(function(){
        console.log(e.target.value,"타임아웃")
        commit('ADD_TODO',e);
      },2000);

      // 2초가지나면 커밋한다는 의미. 
      // 액션을해주고 액션에서 뮤테이션을해주고 뮤테이션에서 데이터를바꿔주는것.

    },
      //데이터를 payload라고 한다. 
    TOGGLE_TODO1({commit},payload){
        setTimeout(function(){
          commit("TOGGLE_TODO",payload);
        },2000);
    },
    DELETE_TODO1({commit},todoId){
      setTimeout(function(){
        commit("DELETE_TODO",todoId);
      },2000);
    },

    getUsers({commit}){
      //여기서 비동기작업을함
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res=>{
              console.log(res,"응답이왔습니다.")
              commit('SET_USERS',res.data)
            })
    }

  },
  getters: {//뷰 컴포넌트안의 computed와 비슷함

    //CompletedTodo에서 사용하는거를 다른데서도 사용할수있게 여기에 등록해서 갖다쓰도록하기위함.
    //각페이지마다 computed를 작성안해도됨 여기에써놓고 가져오기만하면됨.

    numberOfCompletedTodo: state=>{
      return state.todos.filter(todo=> todo.checked).length;

    }
  },

  
  modules: {
    //모듈명user로설정한다는말
    user:user,
    //  좌우 단어가같다면 user라고만 써도 된다. 
    
    todo//좌우단어가같아서 이렇게 써봄.
    
  }

})
