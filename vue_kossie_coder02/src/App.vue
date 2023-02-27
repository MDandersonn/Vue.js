<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/todo">Todo-app</router-link>|
      <router-link to="/todo2">Todo-app2</router-link>|
      <router-link to="/todo3">Todo-app3</router-link>|
      <router-link to="/api">ApiView</router-link>|
    </nav>
    <router-view/>
    <!-- 뷰라우터를 사용하고싶으면 라우터-뷰 태그 추가  -->
  </div>
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
