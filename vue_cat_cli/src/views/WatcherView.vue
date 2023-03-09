<template>
  <div class="watcher">
    <select v-model="current">
      <option v-for="(topic,index) in topics" v-bind:value="topic.value" :key="index">
      {{topic.name}}
      </option>
    </select>
    <div v-for="(item,index) in list" :key="index">{{item.full_name}}</div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'WatcherView',
  data(){
    return{
      list:[],
      current:'',
      topics:[
        {value:'vue', name:'Vue.js'},
        {value:'jQuery', name:'jQuery'}
      ]
    }
  },
  watch:{
      current:function(val){
        console.log(val)
        axios.get('https://api.github.com/search/repositories',{
          params:{q:'topic:'+val}

        }).then(function(response){
          this.list=response.data.items
          console.log(response.data.items)
        }.bind(this))
      }
    }
  
}
</script>
