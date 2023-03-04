<template>
<!-- 부모 -->
<!-- 부모가 자식에게 데이터보내기 -->
  <div>
   
    <PropsComponent title="부모가 자식에게 보낸 메세지"/>
    <hr>
    <PropsComponent :title="msg"/>
    <PropsComponent/>
    <!-- title을 작성하지않으면 default가 작동할것 -->
  </div>
</template>

<script>
import PropsComponent from '@/components/02_PropsComponent.vue'
export default {
    data(){
        return{
          msg:"데이터바인딩"
           
        }
    },
    components:{
        PropsComponent

    }

}
</script>

<style>

</style>