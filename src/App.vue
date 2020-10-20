<template>
  <div id="app">
    <SideBar />
    <PortfolioPage />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import PortfolioPage from "./components/PortfolioPage.vue";

export default {
  name: "App",
  components: {
    SideBar,
    PortfolioPage,
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
