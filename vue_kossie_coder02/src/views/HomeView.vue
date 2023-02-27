<template>
<!-- html코드넣는곳 -->
  <div class="home">

<hr>
    <p>{{name1}}</p>
  <KossieCoder title="home title" />
  <!-- 컴포넌트사용하기:
  script에 import 하고 component:{} 에 등록한다. -->

  <form>
    <!-- 부모 -->
      <InputField :name2="name20" @update-name="updateName1" />
      <!-- 방법2로바꿨을때, 이렇게 바꿔줌 @update-name="name20= $event.target.value " -->
      <!-- 이벤트로 자식에게서 받은것을 updateName1함수로 실행 매개변수로 받아온 value가 들어옴-->
      값:{{name20}}<br>
      <button type="submit"> submit </button>
    </form>
<hr>
  <form>
      <InputField2 :name2="name30"  @update-name="name30= $event.target.value " />
      값:{{name30}}<br>
      <button type="submit"> submit </button>
    </form>
<hr>
  <form>
      <InputField3 v-model="name40" />
      값:{{name40}}<br>
      <button type="submit" @click="updateName"> submit </button>
    </form>
<hr>

  <img alt="Vue logo" src="../assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>

    
  </div>
</template>

<script>

// @ is an alias to /src
import InputField from '@/components/InputField.vue';
import InputField2 from '@/components/InputField2.vue';
import InputField3 from '@/components/InputField3.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import KossieCoder from '@/components/KossieCoder.vue';


export default {
  // 옵션들 들어가는곳

  name: 'HomeView',
  data(){
    return{
      name1:'kossie coder',
      name20:'',
      name30:'',
      name40:'kossie coder'
    }
  },
  components: {
    HelloWorld,
    KossieCoder,
    InputField,
    InputField2,
    InputField3
  },
  methods:{
    // val:자식이 부모에게 전달해준 값. 이걸로 name20의 데이터를 갱신함.
    updateName1(val){
      this.name20=val;
    },
    updateName(){
      this.name40='Hello';
    }
  },

  beforeCreate(){
    // 인스턴스가 생성되기전 실행 , 데이터에 접근이 불가능
    console.log('beforeCreate',this.name1)
  },
  created(){
    //인스턴스가 생성된후.
    //서버에요청을보내서 응답을 받아온 데이터이용 데이터에 접근가능  
    console.log('created',this.name1)
  },
  beforeMount(){
    // alert('beforeMount')
  },
  mounted(){
    // alert('mount')

  },
  beforeUpdate(){
    // alert('beforeUpdate')

  },
  updated(){
    //  alert('updated')

  },
  //다른페이지로 넘어갈때.
  beforeDestroy(){
    // alert('beforeDestroy')
  },
  destroyed(){
    // alert('destroyed')
  }

}
</script>

<style scoped>
/* css코드 scoped를 넣어야 여기 템플릿에만 적용됨 */
p{
  color:red;
}
</style>