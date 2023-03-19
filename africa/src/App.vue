<template>
<div>
  <Header/>
  <RouterView/>
  <Footer2/>

</div>
</template>

<script>
import Footer2 from './components/Footer2.vue'
import Header from './components/Header.vue'
import store from "@/scripts/store";
import axios from "axios";
//import router from "@/scripts/router";
import {watch} from "vue";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: 'App',
  components: {
    Header,
    Footer2,
    // Home

  },

  setup(){
    const check= ()=>{
      axios.get("/api/account/check")
      .then(({data}) =>{
        console.log(data);
        store.commit("setAccount",data || 0 ); //data가 있으면 data를 넣고 없으면 0을 넣으라는 의미

      })
    };
    const route= useRoute();//브라우저의  url관련된 정보를 가져옴
      //경로가바뀔때마다 감시해주는 watch를 넣는다.
    watch(route, ()=>{
      check();
    })

      //sessionStrorage를 쓰면 f12로 조작가능
    // const id= sessionStorage.getItem("id");
    // if (id){
    //   store.commit("setAccount",id);
    // }
  }
}
</script>

  <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
    </style>
