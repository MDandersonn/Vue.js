<template>
  <div class="slot1">
  <h2> 컴퍼넌트 시작</h2>
  <hr>
      <SlotComponent>
        <!-- 컴퍼넌트의 중간에 끼워넣기 각각 다른 내용을 끼워넣는경우-->
        <template #one>
          <div>
            <h6 style="color:red;">여기에 코드를 입력하면 컴포넌트의 slot name="one" 태그안으로 들어간다.</h6>
            <hr>
          </div>
        </template>

        <template v-slot:three="{ prp }">
            <p> {{ prp }}<p>
          <div>
            <h6 style="color:blue;"> 여기에 코드를 입력하면 컴포넌트의 slot name="three" 태그안으로 들어간다.</h6>
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
