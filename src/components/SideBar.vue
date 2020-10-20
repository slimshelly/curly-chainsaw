<template>
  <div class="menu_container">
    <div class="menu text">
      <a href="#" rel="home_page"
        ><b
          >Concrete Islands<br />
          (Bureaucracy and Labyrinth)</b
        ><br />
        <br
      /></a>
      <a href="Section-01" rel="history" data-tags="Section-01">Section 01</a>
      <div class="bullets">
        <a href="01" rel="history">The Grid</a>
      </div>
      <div class="bullets">
        <a href="02" rel="history">Haphazard Arrangements</a>
      </div>
      <div class="bullets">
        <a href="03" rel="history">Violence and Confrontation</a>
      </div>
      <div class="bullets"><a href="04" rel="history">Glass Boxes</a></div>
      <br />
      <a href="Section-02" rel="history" data-tags="Section-02"
        >Section&nbsp; 02</a
      >
      <hr />
      <div class="bullets">
        <a href="05" rel="history">Planetary Suburbia</a>
      </div>
      <div class="bullets">
        <a href="06" rel="history">Jumbled Spatiality</a><br />
      </div>
      <div class="bullets">
        <a href="07" rel="history">Intruder in the Fortress</a>
      </div>
      <div class="bullets">
        <a href="08" rel="history">Endlessly Reenacted</a>
      </div>
      <div class="bullets">
        <a href="09" rel="history">Unrelated Objects</a>
      </div>
      <div class="bullets">
        <a href="10" rel="history">Residential Buildings</a>
      </div>
      <br />

      <a href="Information" rel="history">Information</a><br />
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




