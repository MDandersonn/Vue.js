<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
      <!-- 열고닫는 아이콘추가 -->
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <!-- 기본레이아웃컴퍼넌트로 만들어주는 특수속성: app -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
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
        <router-link to="/breakpoints">Breakpoints</router-link>
      </div>
       <v-container class="" fluid>
          <router-view />
       </v-container>
    </v-main>

  </v-app>
</template>
<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        // 메뉴클릭시 이동
        { title: "grid System", icon: "mdi-image", to: "/grid-system" },
        { title: "Breakpoints", icon: "mdi-image", to: "/breakpoints" },
        { title: "grid List Page", icon: "mdi-image", to: "/grid-list-page" },
      ],
      right: null,
    };
  },
};
</script>
