<template>
  <div class="page_container">
    <div class="padding">
      <div class="grid">
        <div class="thumbnail has_title">
          <a href="/03" class="image-link">
            <div class="thumb_image scroll-transition-fade">
              <img src="./../assets/c3.jpg" />
            </div>
            <!-- <div class="title"><span>03</span></div> -->
          </a>
        </div>
        <div class="thumbnail has_title">
          <a href="/04" class="image-link">
            <div class="thumb_image scroll-transition-fade">
              <img src="./../assets/c4.jpg" />
            </div>
            <!-- <div class="title"><span>04</span></div> -->
          </a>
        </div>
        <div class="thumbnail has_title">
          <a href="/05" class="image-link">
            <div class="thumb_image scroll-transition-fade">
              <img src="./../assets/c5.jpg" />
            </div>
            <!-- <div class="title"><span>05</span></div> -->
          </a>
        </div>
        <div class="thumbnail has_title">
          <a href="/06" class="image-link">
            <div class="thumb_image scroll-transition-fade">
              <img src="./../assets/c6.jpg" />
            </div>
            <!-- <div class="title"><span>06</span></div> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page_container {
  /* background-color: #fff; */
  width: 80%;
  margin-left: auto /*!content_right; */;
  margin-right: 0 /*!content_right*/;
  text-align: left /*!text_left*/;

  padding-top: 4rem /*!main_margin; */;
  padding-bottom: 4rem /*!main_margin; */;
  padding-left: 4rem /*!main_margin; */;
  padding-right: 4rem /*!main_margin; */;
}

.padding {
  padding: 0.5rem;
}

.grid {
  margin: -0.5rem;
  padding: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  overflow: visible;
}

.thumbnail {
  padding: 0.25rem;
  width: 50%;
}

img {
  width: 100%;
  height: auto;
  margin-left: 0%;
  margin-top: -0.25rem;
}
</style>




