<template>
  <div class="slot1">
  <h2> 컴퍼넌트 시작</h2>
  <hr>
  <!-- 컴퍼넌트의 중간에 끼워넣기 공통된내용을 끼워넣는경우-->
      <SlotComponent1>
          niA5wC7aqDn4Or6HCJyV7X0tSPqaTqkcnDdtZZgAgds2z1DbEhIWmixW0fvIfNuUsdf
      </SlotComponent1>
    <h2>컴퍼넌트 종료</h2>
  </div>
</template>



<script>
import SlotComponent1 from "@/components/04_SlotComponent1.vue"
export default {
  data(){
    return{

    }
  },
  components:{
    SlotComponent1
  }
  
}
</script>
