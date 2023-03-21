<template>
<v-app id="app">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
      <!-- 열고닫는 아이콘추가 -->
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- 배경화면 삽입 --> 
    <!-- dark 가되면 text가 화이트로변함 -->
    <v-navigation-drawer v-model="drawer"  dark app :src="require('@/assets/sidebar.jpg')">
      <!-- 기본레이아웃컴퍼넌트로 만들어주는 특수속성: app -->

<!-- v-slot:img="props" 랑 #img랑 같음 배경을 거멓게,-->
      <template #img="props">
         <v-img :gradient="gradient" v-bind="props"></v-img>
      </template>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
      <!-- active-class="primary" : 선택되면 파랑색  py-1 패딩상하간격-->
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to" active-class="primary" class="py-1">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div>
        <router-link to="/">Dashboard</router-link>|
        <router-link to="/grid-system">GridSystem</router-link>|
        <router-link to="/grid-list-page">GridListPage</router-link>|
        <router-link to="/breakpoints">Breakpoints</router-link>|
        <router-link to="/typography">Typography</router-link>|
        <router-link to="/tables">Tables</router-link>|
        <router-link to="/forms">Forms</router-link>|
        <router-link to="/icons">Icons</router-link>|
        <router-link to="/buttons">Buttons</router-link>|
      </div>
       <v-container class="" fluid>
          <router-view />
       </v-container>
    </v-main>

  </v-app>
  
</template>

<script>
export default {
    name: "DefaultLayout",
    data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        // 메뉴클릭시 이동
        { title: "grid System", icon: "mdi-image", to: "/grid-system" },
        { title: "Breakpoints", icon: "mdi-image", to: "/breakpoints" },
        { title: "grid List Page", icon: "mdi-image", to: "/grid-list-page" },
        { title: "Tables", icon: "mdi-table-settings", to: "/tables" },
        { title: "Forms", icon: "mdi-form-select", to: "/forms" },
        { title: "Buttons", icon: "mdi-gesture-tap-button", to: "/buttons" },
        { title:"Icons", icon: "mdi-emoticon-excited-outline", to: "/icons" },
        { title:"SignIn", icon: "mdi-emoticon-excited-outline", to: "/authentication/sign-in" },
        { title:"SignUp", icon: "mdi-emoticon-excited-outline", to: "/authentication/sign-up" },
        { title:"ProductList", icon: "mdi-emoticon-excited-outline", to: "/page/product-list" }
      ],
      right: null,
      gradient: 'rgba(0,0,0, 0.7), rgba(0,0,0, .7)',
    };
  },

}
</script>

<style>

</style>