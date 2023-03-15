<template>
<div class="home">

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="(item1, idx) in state.items" :key="idx">
            <!-- {{item1}} -->
                <!-- <Card/> -->
                <Card :item="item1"/>
        

             </div>
        </div>
    </div>
  </div> 

</div>    
</template>

<script>
import Card from '../components/Card.vue'
import axios from "axios";
import {reactive} from "vue";

export default {
  components: { Card },
    name: "Home"   ,
    setup(){
        const state = reactive({
            items:[]
        })
        axios.get("/api/items")
        .then( ({data})=>{    //res      ->res.data 대신  바로 data를 뽑아올수있다.
            // console.log(res);
            state.items = data;//배열 받아옴 [알파,베타,감마]
        })
        return {state}
    }
}
</script>

<style scoped>

</style>