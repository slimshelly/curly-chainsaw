<template>
  <div class="page_container">
    <div class="padding">
      <div class="grid">
        <Thumbnail
          :linkUrl="`/03`"
          :imgSrc="require('./../assets/c3.jpg')"
          :titleText="`03`"
        >
        </Thumbnail>
        <Thumbnail
          :linkUrl="`/04`"
          :imgSrc="require('./../assets/c4.jpg')"
          :titleText="`04`"
        >
        </Thumbnail>

        <Thumbnail
          :linkUrl="`/05`"
          :imgSrc="require('./../assets/c5.jpg')"
          :titleText="`05`"
        >
        </Thumbnail>
        <Thumbnail
          :linkUrl="`/06`"
          :imgSrc="require('./../assets/c6.jpg')"
          :titleText="`06`"
        >
        </Thumbnail>
        <Thumbnail
          :linkUrl="`/07`"
          :imgSrc="require('./../assets/c7.jpg')"
          :titleText="`07`"
        >
        </Thumbnail>
        <Thumbnail
          :linkUrl="`/08`"
          :imgSrc="require('./../assets/c8.jpg')"
          :titleText="`08`"
        >
        </Thumbnail>
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from "../components/Thumbnail.vue";
export default {
  name: "Page",
  components: {
    Thumbnail,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page_container {
  /* background-color: #fff; */
  width: 80%;
  margin-left: 20% /*!content_right; */;
  margin-right: 0 /*!content_right*/;
  text-align: left /*!text_left*/;

  padding-top: 1rem /*!main_margin; */;
  padding-bottom: 1rem /*!main_margin; */;
  padding-left: 1rem /*!main_margin; */;
  padding-right: 1rem /*!main_margin; */;

  position: absolute;
  top: 0px;
  z-index: 4;
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
</style>




