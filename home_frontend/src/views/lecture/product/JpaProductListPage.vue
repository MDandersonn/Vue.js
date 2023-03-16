<template>
  <v-container>
    <h2>Vue + Spring + JPA Products</h2>
    <router-link :to="{ name: 'JpaProductRegisterPage' }">
      상품 등록
    </router-link>
    <jpa-product-list :products="products"/>
  </v-container>
</template>

<script>

import JpaProductList from '@/components/lecture/product/JpaProductList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { JpaProductList },
  name: "JpaProductListPage",
  computed: {
    ...mapState([
      'products'
    ]),
  },
  created(){
    // alert("created!")
    
  },
   beforeMount(){
      //  alert("before mount!")
    },
  mounted () {
    // alert("mount!")
    this.requestProductListToSpring()
  },
  methods: {
    ...mapActions([
      'requestProductListToSpring'
    ])
  }
}

</script>

<style>

</style>