<template>
  <v-app>
    <v-main>
      <nav>
        <router-link to="/">Home</router-link> |
        <br><br>
        <router-link to="/databinding/string">string바인딩 테스트</router-link> |
        <router-link to="/databinding/html">html바인딩 테스트</router-link> |
        <router-link to="/databinding/input">input바인딩 테스트</router-link> |
        <router-link to="/databinding/select">select바인딩 테스트</router-link> |
        <router-link to="/databinding/checkbox">checkbox바인딩 테스트</router-link> |
        <router-link to="/databinding/radio">radio바인딩 테스트</router-link> |
        <router-link to="/databinding/attribute"> attribute바인딩 테스트</router-link> |
        <router-link to="/databinding/list"> list바인딩 테스트</router-link> |
        <router-link to="/databinding/class"> class바인딩 테스트</router-link> |
        <router-link to="/databinding/style"> style바인딩 테스트</router-link> |
        <br><br>
        <router-link to="/event/click"> click 이벤트 테스트</router-link> |
        <router-link to="/event/change"> change 이벤트 테스트</router-link> |
        <router-link to="/event/key"> key 이벤트 테스트</router-link> |
      </nav>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
