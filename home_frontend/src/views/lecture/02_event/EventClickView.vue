<template>
<div>
  <button @click="increaseCounter">Add 1</button>
  <p>{{counter}}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0

        }
    },
    methods: {
        increaseCounter () {
            this.counter +=1
            
        }

    }
}
</script>


<style scoped>
input{
    border:1px solid red;
}
</style>
 