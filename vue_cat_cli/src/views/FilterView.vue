<template>
<div class="filter">

1:{{ price | localeNum}} <br>
2:<div v-bind:id="price | localeNum"></div>
<!-- 왜안돼 --><br>
전역필터 사용:{{ price | localeNum1}} <br>
필터에 매개변수전달: {{message | filter2("앙",100)}}<br>
필터 두개 체인 :{{ price | localeNum1 | filter3}} <br>
</div>  
</template>

<script>
export default {
    data(){
        return{
            price:19800,
            message:"하이"
        }
    },
    filters :{
        localeNum:function(val){
            return val.toLocaleString()
        },
        filter2: function(message,foo,num){
            console.log(message,foo,num)
        },
        filter3:function(val){
            return val+"good";
        },
    }

}
</script>

<style>

</style>