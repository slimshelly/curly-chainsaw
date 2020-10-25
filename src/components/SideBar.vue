<template>
  <div class="menu_container">
    <div class="menu text">
      <router-link to="/"
        ><b
          >Concrete Islands<br />
          (Bureaucracy and Labyrinth)</b
        ><br />
        <br
      /></router-link>
      <router-link to="Section-01">Section 01 </router-link>
      <hr />
      <div class="bullets">
        <router-link to="/portfolio/01">The Grid</router-link>
      </div>
      <div class="bullets">
        <router-link to="/portfolio/02">Haphazard Arrangements</router-link>
      </div>
      <div class="bullets">
        <router-link to="/portfolio/03">Violence and Confrontation</router-link>
      </div>
      <div class="bullets">
        <router-link to="/portfolio/04">Glass Boxes</router-link>
      </div>
      <br />
      <router-link to="Section-02">Section&nbsp; 02</router-link>
      <hr />
      <div class="bullets">
        <router-link to="/portfolio/05">Planetary Suburbia</router-link>
      </div>
      <div class="bullets">
        <router-link to="/portfolio/06">Jumbled Spatiality</router-link><br />
      </div>
      <div class="bullets">
        <router-link to="/portfolio/07">Intruder in the Fortress</router-link>
      </div>
      <div class="bullets">
        <router-link to="/portfolio/08">Endlessly Reenacted</router-link>
      </div>
      <div class="bullets">
        <router-link to="/portfolio/09">Unrelated Objects</router-link>
      </div>
      <div class="bullets">
        <router-link to="/portfolio/10">Residential Buildings</router-link>
      </div>
      <br />

      <router-link to="/info">Information</router-link><br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "NittiGrotesk";
  src: url("~@/assets/fonts/NittiGrotesk-Normal.woff") format("woff");
}

.menu_container {
  min-height: 100vh /*!page_height_100vh; */;
  background-color: #fff /*!page_bgcolor*/;
  width: 20%;
  padding: 0;
  margin-left: 0 /*!content_left*/;
  margin-right: auto /*!content_left*/;
  align-items: flex-end /*!vertical_bottom*/;
  position: relative;
  z-index: 2;
}
.menu {
  padding-left: 2.5rem /*!main_margin*/;
  padding-right: 2rem /*!main_margin*/;
  padding-top: 2.5rem /*!main_margin*/;
  padding-bottom: 2.5rem /*!main_margin*/;
  flex: 1 0 auto;
  max-width: 20%; /* ? */
  position: fixed;
  bottom: 0px;
}

.text {
  font-size: 1.6rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.75);
  font-family: "NittiGrotesk", Icons;
  font-style: normal;
  line-height: 1.3;
  text-align: left /*!text_left;;; */;
}

.text a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.75);
}

.text .bullets {
  margin-left: 2rem;
}
</style>




