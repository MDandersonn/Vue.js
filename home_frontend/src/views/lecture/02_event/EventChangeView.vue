<template>
<div>
    <!-- 멀티 셀렉트 -->
    <!-- @change 는 v-on:change와 같다. 
    이벤트 전달 :changeCity($event)  이렇게쓰면, 
    return에서 changeCity(event){
        console.log(event.target) 이렇게 받을수있따.
    }
    -->
  <select name="" id="" @change ="changeCity" v-model="selectedCity">
        <option value="">==도시선택==</option>
        <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">{{city.title}}</option>
   </select>

    <select name="" id="" >
        <option value="">==동선택==</option>
        <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">{{dong.dongTitle}}</option>
   </select>

   <select name="" id="" >
        <option value="">==동선택==</option>
        <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in dongList.filter(dong => dong.cityCode===selectedCity)">{{dong.dongTitle}}</option>
   </select>

</div>
</template>

<script>
export default {
    data(){
        return{
            selectedCity:'',
            cityList: [
                {cityCode:'02',title:'서울'},
                {cityCode:'051',title:'부산'},
                {cityCode:'064',title:'제주'}
            ],
            dongList:[
                {cityCode:'02', dongCode:'1', dongTitle:"서울 1동"},
                {cityCode:'02', dongCode:'2', dongTitle:"서울 2동"},
                {cityCode:'02', dongCode:'3', dongTitle:"서울 3동"},
                {cityCode:'02', dongCode:'4', dongTitle:"서울 4동"},
                {cityCode:'051', dongCode:'1', dongTitle:"부산 1동"},
                {cityCode:'051', dongCode:'2', dongTitle:"부산 2동"},
                {cityCode:'051', dongCode:'3', dongTitle:"부산 3동"},
                {cityCode:'051', dongCode:'4', dongTitle:"부산 4동"},
                {cityCode:'064', dongCode:'1', dongTitle:"제주 1동"},
                {cityCode:'064', dongCode:'2', dongTitle:"제주 2동"},
                {cityCode:'064', dongCode:'3', dongTitle:"제주 3동"},
                {cityCode:'064', dongCode:'4', dongTitle:"제주 4동"}
                
            ],
            selectedDongList:[]

        }
    },
    methods: {
        changeCity (){
            this.selectedDongList=this.dongList.filter(dong => dong.cityCode===this.selectedCity)

        }
        

    }
}
</script>


<style scoped>
input{
    border:1px solid red;
}
</style>
 