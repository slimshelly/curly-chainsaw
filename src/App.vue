<template>
  <div id="app">
    <SideBar />
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style>
html {
  font-size: 57.06%;
}

body {
  background-color: #f3f3f3;
  -webkit-font-smoothing: antialiased;
}

div {
  display: block;
}

#app {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}
</style>
