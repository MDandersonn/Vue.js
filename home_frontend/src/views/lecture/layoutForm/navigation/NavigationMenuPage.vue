<template>
  <nav>
  <!-- 상단 툴바. -->
  <!-- app bar로 묶어놓으면은 한쪽이 늘어나면 자리를 비켜준다. -->
    <v-app-bar color="dark" class="flex-grow-0" app dark>
      <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer" />
      <v-img
        class="mx-2"
        src="@/assets/logo.png"
        max-height="40"
        max-width="40"
        contain
      />
      <v-toolbar-title class="text-uppercase text--darken-4">
        <span>EDDI</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isTrue == true" text @click="clickToggle">
        <span>테스트</span>
        <v-icon right>mdi-test-tube</v-icon>
      </v-btn>
      <v-btn v-else text @click="clickToggle">
        <span>또 테스트</span>
        <v-icon right>mdi-history</v-icon>
      </v-btn>
      
       <v-btn v-if="isAuthenticated == true" text color="grey" v-on:click="resign">
        <span>회원 탈퇴</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn text color="grey" onclick="location.href='http://localhost:8081/sign-up'">
        <span>Sign Up</span>
        <v-icon right>mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-btn v-if="isAuthenticated == false" text color="grey" onclick="location.href='http://localhost:8081/sign-in'">
        <span>Sign In</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn v-else text color="grey" v-on:click="logout">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

<!-- 옆창 네비게이션 -->
    <v-navigation-drawer app v-model="navigation_drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">EDDI</v-list-item-title>
          <v-list-item-subtitle>Functions</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          v-for="link in links"
          :key="link.name"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon left>
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";
export default {
  name: "NavigationMenuPage",
  data() {
    return {
      isTrue: false,
      navigation_drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", name: "home", route: "/" },
        {
          icon: "mdi-share-variant-outline",
          text: "Sharing",
          name: "JpaBoardListPage",
          route: "/board-list-page",
        },
      ],
    };
  },
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  mounted() {
    //localStorage를 사용하면, 브라우저에 key-value 값을 Storage에 저장할 수 있습니다.
    //저장한 데이터는 세션간에 공유됩니다.
    //즉, 세션이 바뀌어도 저장한 데이터가 유지됩니다.
    if (localStorage.getItem("userInfo")) {
      this.$store.state.isAuthenticated = true;
    } else {
      this.$store.state.isAuthenticated = false;
    }
  },
  methods: {
    clickToggle() {
      this.isTrue = !this.isTrue;
    },
     logout () {
      console.log('localStorage.getItem("userInfo"): ' + localStorage.getItem("userInfo"))
        let token = localStorage.getItem("userInfo")
      const length = token.length
      console.log('token: ' + token + ', length: ' + length)
      token = token.substr(1, length - 2)//양쪽에 있는 "" 제거 substr("시작 위치", "길이")
      console.log('token: ' + token + ', length: ' + token.length)
      axios.post("http://localhost:7777/member/logout", token)//토큰을 보냄
          .then(() => {
            alert("로그아웃 완료");
            localStorage.removeItem("userInfo");//로컬스토리지에서 제거
            this.$store.state.isAuthenticated = false;
          })
      },
    resign () {//백엔드엔 구현 아직 안했음.
      let token = localStorage.getItem("userInfo")
      const length = token.length
      console.log('token: ' + token + ', length: ' + length)
      token = token.substr(1, length - 2)
      console.log('token: ' + token)
      axios.post("http://localhost:7777/member/resign", token)
          .then(() => {
            alert("회원탈퇴 완료");
            localStorage.removeItem("userInfo");
            this.$store.state.isAuthenticated = false;
          })
    },
  }
}
</script>

<style>
</style>