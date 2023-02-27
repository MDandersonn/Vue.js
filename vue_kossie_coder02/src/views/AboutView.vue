<template>
  <div class="about">
    <h1>{{title1}}</h1>
    <KossieCoder title="about title"/>
    <KossieCoder/>


    <KossieCoder>
      <!-- <template #one> -->
      <template #one="{ pp }">
        <!-- <template v-slot:one> 도 가능-->
          <p>자식에게 데이터전달하는 법 {{ pp }}<p>
        <div>
          <h1 style="color:red;">여기에 코드를 입력하면 컴포넌트의 slot(one)태그안으로 들어간다.</h1>
          
        </div>
      </template>
      <template v-slot:two="props">
        <!-- <template #two>로도 사용가능 -->
          <p>자식에게 데이터전달하는 법2 {{ props.pp }}<p>
        <div>
          <h1 style="color:green;"> slot(two)태그안으로 들어옴</h1>
        </div>
      </template>
      
      <template v-slot:default>
        <!-- <template #default> 로 줄여서 사용가능.  -->
        <div>
          <h1 style="color:blue;"> 이건 디폴트</h1>
        </div>
      </template>
    </KossieCoder>
  </div>
</template>



<script>
import KossieCoder from "@/components/KossieCoder.vue"
export default {
  data(){
    return{
      title1:"This is an about page"
    }
  },
  components:{
    KossieCoder
  }
  
}
</script>
