<template>
  <div id="app">
    <div>
      <router-link to="/">Dashboard</router-link>|
      <router-link to="/grid-system">GridSystem</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
