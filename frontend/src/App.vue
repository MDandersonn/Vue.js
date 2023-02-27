<template>
  <v-app>
    <v-main>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/bind-test">BindTest</router-link> |
        <router-link to="/click-test">클릭 테스트</router-link> |
        <router-link to="/component-test">컴포넌트 테스트</router-link> |
        <router-link to="/emit-test-board-game">emit 테스트(보드 게임)</router-link> |
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

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
