import axios from "axios";
export default{
    namespaced:true,//모듈쓸떄 꼭필요
    state: { //데이터가들어감 data와비슷함
        todos:[
          {id:1,text: 'buy a car',checked:false},
          {id:2,text: 'play game',checked:false}
        ],
      },
      mutations: {//데이터를 바꿔줌 (update) 
        
        ADD_TODO(state,e){
          console.log(e,3)
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
    
        }
      },
      actions: {
        
        //함수가 들어감(비동기) (method)
        //데이터베이스에 새로운 todo를 저장해달라고 요청하고 응답을 받을떄까지 시간이 좀걸리는데 그걸 보내놓고 다른작업을
        //이어나가게 됨
        addTodo1({commit},e) {
          
          console.log(e,2);
          commit('ADD_TODO',e);
          
          //여기서 비동기작업들어감.
          // 보통 axios를 요청을보낼때 많이씀  axios.post() 로 value를 보내주고 응답이오면 커밋을함.
          //그대신 setTimeOut으로 연습해보자
          // let val= e.target.value;
          // setTimeout(function(){
          //   console.log(val)
          //   commit('ADD_TODO',val);
          // },2000);
    
          //2초가지나면 커밋한다는 의미.
          
          //액션을해주고 액션에서 뮤테이션을해주고 뮤테이션에서 데이터를바꿔주는것.
    
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
    
        }
    
      },
      getters: {//뷰 컴포넌트안의 computed와 비슷함
    
        //CompletedTodo에서 사용하는거를 다른데서도 사용할수있게 여기에 등록해서 갖다쓰도록하기위함.
        //각페이지마다 computed를 작성안해도됨 여기에써놓고 가져오기만하면됨.
    
        numberOfCompletedTodo: state=>{
          return state.todos.filter(todo=> todo.checked).length;
    
        }
      },



}