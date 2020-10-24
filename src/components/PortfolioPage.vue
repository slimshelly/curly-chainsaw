<template>
  <div class="page_container">
    <div class="content_container">
      <div class="content">
        <div v-for="(thumbnail, index) in thumbnails" :key="index">
          <div v-if="itemId == thumbnail.id">
            <h1>{{ thumbnail.title }}</h1>
            <img :src="thumbnails.image" />
            <div class="info">
              <div class="caption">{{ thumbnail.caption }}</div>
              <div class="details">{{ thumbnail.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
  props: ["id"],
  data() {
    return {
      itemId: this.$route.params.id,
      thumbnails: [
        {
          id: "08",
          title: "Endlessly Reenacted",
          caption: "Rem Koolhaas, Delirious New York, 1978",
          text:
            "Therefore, the performance can never end or even progress in the conventional sense of dramatic plotting; it can only be the cyclic restatement of a single theme: creation and destruction irrevocably interlocked, endlessly reenacted. The only suspense in the spectacle comes from the constantly escalating intensity of the performance.",
          image: require("../assets/c8.jpg"),
        },
      ],
    };
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
  padding-top: 4rem /*!main_margin*/;
  padding-bottom: 4rem /*!main_margin*/;
  padding-left: 4rem /*!main_margin*/;
  padding-right: 4rem /*!main_margin*/;

  position: absolute;
  top: 0px;
  z-index: 4;
}

img {
  width: 100%;
  height: auto;
  float: none;
  margin-bottom: 3em;
}

.info {
  margin: -4rem;
  padding: 2rem;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
}

.caption {
  font-weight: bold;
  padding: 2rem;
  width: 33.33333%;
}

.details {
  padding: 2rem;
  width: 66.66667%;
}
</style>




