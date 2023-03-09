<template>
<!-- html코드넣는곳 -->
  <div class="home">
  <form>
    <!-- 부모 -->
      <EmitComponent1 :prp="name1" @update-name="updateName1" />
      <!-- 이벤트로 자식에게서 받은것을 updateName1함수로 실행 매개변수로 받아온 value가 들어옴-->
      값:{{name1}}<br>
      <button type="submit"> submit </button>
    </form>
<hr>
  <form>
      <EmitComponent2 :prp="name2"  @update-name="name2= $event.target.value" />
      값:{{name2}}<br>
      <button type="submit"> submit </button>
    </form>
<hr>
  <form>
      <EmitComponent3 v-model="name3" />
      값:{{name3}}<br>
      <button type="submit" @click="updateName3"> submit </button>
    </form>
<hr>

    
  </div>
</template>

<script>

// @ is an alias to /src
import EmitComponent1 from '@/components/03_EmitComponent1.vue';
import EmitComponent2 from '@/components/03_EmitComponent2.vue';
import EmitComponent3 from '@/components/03_EmitComponent3.vue';

export default {
  // 옵션들 들어가는곳

  name: 'HomeView',
  data(){
    return{
      dd:'kossie coder',
      name1:'',
      name2:'',
      name3:'kossie coder'
    }
  },
  components: {

    EmitComponent1,
    EmitComponent2,
    EmitComponent3
  },
  methods:{
    // val:자식이 부모에게 전달해준 값. 이걸로 name1의 데이터를 갱신함.
    updateName1(val){
      this.name1=val;
    },
    updateName3(){
      this.name3='Hello';
    }
  },

  beforeCreate(){
    // 인스턴스가 생성되기전 실행 , 데이터에 접근이 불가능
    console.log('beforeCreate',this.dd)
  },
  created(){
    //인스턴스가 생성된후.
    //서버에요청을보내서 응답을 받아온 데이터이용 데이터에 접근가능  
    console.log('created',this.dd)
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