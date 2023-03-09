<template>
  <div class="slot">
  <h2> 컴퍼넌트 시작</h2>
  <hr>
      <SlotComponent>

        <template #one>
          <div>
            <h6 style="color:red;">여기에 코드를 입력하면 컴포넌트의 slot name="one" 태그안으로 들어간다.</h6>
            <hr>
          </div>
        </template>

<!-- 속성이 있는경우 -->
        <template #two="{ prp }">
            <p> {{ prp }}<p>
          <div>
            <h6 style="color:red;">여기에 코드를 입력하면 컴포넌트의 slot name="two" 태그안으로 들어간다.</h6>
            <hr>
          </div>
        </template>

<!-- 속성이 있는경우-->
        <template v-slot:three="{ prp }">
            <p> {{ prp }}<p>
          <div>
            <h6 style="color:red;">여기에 코드를 입력하면 컴포넌트의 slot name="three" 태그안으로 들어간다.</h6>
            <hr>
          </div>
        </template>

<!-- 속성이 있는경우 props사용-->
        <template  #four="props">
         <p>{{ props.pp }}<p>
          <div>
            <h6 style="color:green;"> slot name="four" 태그안으로 들어옴</h6>
            <hr>
          </div>
        </template>

<!-- 속성이 있는경우props사용-->

        <template v-slot:five="props">
            <p>{{ props.pp }}<p>
          <div>
            <h6 style="color:green;"> slot name="five"태그안으로 들어옴</h6>
            <hr>
          </div>
        </template>

        <template v-slot:default>
          <!-- <template #default> 로 줄여서 사용가능.  -->
          <div>
            <h6 style="color:blue;"> 이건 디폴트</h6>
            <hr>
          </div>
        </template>

      </SlotComponent>
    <h2>컴퍼넌트 종료</h2>
  </div>
</template>



<script>
import SlotComponent from "@/components/04_SlotComponent.vue"
export default {
  data(){
    return{

    }
  },
  components:{
    SlotComponent
  }
  
}
</script>
