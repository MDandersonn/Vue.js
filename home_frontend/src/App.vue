<template>
  <v-app>
    <!-- <navigation-view/> -->
    <navigation-menu-page/>
    <!-- 네비게이션 상단바 -->
    <v-main>
    <!-- 본문내용 -->
      <router-view/>
    </v-main>
    <!-- 푸터 -->
    <Footer/>
  </v-app>    
</template>

<script>
import Footer from '@/views/lecture/layoutForm/Footer.vue';
import NavigationMenuPage from '@/views/lecture/layoutForm/navigation/NavigationMenuPage.vue';
// import NavigationView from '@/views/lecture/layoutForm/navigation/NavigationView.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
   components: {
    // NavigationView,
    NavigationMenuPage,
    Footer
  }
};
</script>
