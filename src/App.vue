<template>
  <div id="app">
    <SideBar />
    <Page />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import Page from "./components/Page.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Page,
  },
};
</script>

<style>
html {
  font-size: 57.06%;
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
