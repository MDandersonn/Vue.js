<template>
<div class="home">

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Album example</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>

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