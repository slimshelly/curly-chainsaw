<template>
  <div class="menu_container">
    <div class="menu text">
      <div
        class="page_content clearfix"
        data-elementresizer=""
        data-resize-parent=""
        data-ce-host="true"
        data-ce-model-id="10189669"
      >
        <a href="#" rel="home_page"
          ><b
            >Concrete Islands<br />
            (Bureaucracy and Labyrinth)</b
          ><br />
          <br
        /></a>
        <a href="Section-01" rel="history" data-tags="Section-01">Section 01</a>
        <hr />
        <blockquote><a href="01" rel="history">The Grid</a></blockquote>
        <blockquote>
          <a href="02" rel="history">Haphazard Arrangements</a>
        </blockquote>
        <blockquote>
          <a href="03" rel="history">Violence and Confrontation</a>
        </blockquote>
        <blockquote><a href="04" rel="history">Glass Boxes</a></blockquote>
        <br />
        <a href="Section-02" rel="history" data-tags="Section-02"
          >Section&nbsp; 02</a
        >
        <hr />
        <blockquote>
          <a href="05" rel="history">Planetary Suburbia</a>
        </blockquote>
        <blockquote>
          <a href="06" rel="history">J</a
          ><a href="06" rel="history">umbled Spatiality</a><br />
        </blockquote>
        <blockquote>
          <a href="07" rel="history">Intruder in the Fortress</a>
        </blockquote>
        <blockquote>
          <a href="08" rel="history">Endlessly Reenacted</a>
        </blockquote>
        <blockquote>
          <a href="09" rel="history">Unrelated Objects</a>
        </blockquote>
        <blockquote>
          <a href="10" rel="history">Residential Buildings</a>
        </blockquote>
        <br />

        <a href="Information" rel="history">Information</a><br />
        <br />
      </div>
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
.menu_container {
  min-height: 100vh /*!page_height_100vh; */;
  background-color: #fff /*!page_bgcolor*/;
  width: 20%;
  margin-left: 0 /*!content_left*/;
  margin-right: auto /*!content_left*/;
  align-items: flex-end /*!vertical_bottom*/;
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
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.75);
  font-family: "arial", Icons;
  font-style: normal;
  line-height: 1.2;
  text-align: left /*!text_left;;; */;
}

.text a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.75);
}

.text blockquote {
  /* margin-left: 0px; */
}
</style>




