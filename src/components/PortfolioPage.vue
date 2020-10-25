<template>
  <div class="page_container">
    <div class="content_container">
      <div class="content">
        <div v-for="(thumbnail, index) in thumbnails" :key="index">
          <div v-if="itemId == thumbnail.id">
            <img :src="thumbnail.image" />
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
          id: "01",
          title: "The Grid",
          caption: "Rem Koolhaas, Delirious New York, 1978",
          text:
            "The Grid's two-dimensional discipline also creates undreamt-of freedom for three-dimensional anarchy. The Grid defines a new balance between control and de-control in which the city can be at the same time ordered and fluid, a metropolis of rigid chaos.",
          image: require("../assets/c1.jpg"),
        },
        {
          id: "02",
          title: "Haphazard Arrangements",
          caption: "Le Corbusier, The City of Tomorrow and Its Planning, 1929",
          text:
            "The city of today is a dying thing because it is not geometrical. To build in the open would be to replace our present haphazard arrangements, which are all we have today, by a uniform lay-out. Unless we do this there is no salvation.",
          image: require("../assets/c2.jpg"),
        },
        {
          id: "03",
          title: "Violence and Confrontation",
          caption: "J. G. Ballard, High-Rise, 1975",
          text:
            "With its forty floors and thousand apartments, its supermarket and swimming-pools, bank and junior school — all in effect abandoned in the sky — the high-rise offered more than enough opportunities for violence and confrontation.",
          image: require("../assets/c3.jpg"),
        },
        {
          id: "04",
          title: "Glass Boxes",
          caption: "Tom Wolfe, Bauhaus to Our House, 1981",
          text:
            "There are now new approaches, new movements, new isms: Post-Modernism, Late Modernism, Rationalism, participatory architecture, Neo-Corbu, and the Los Angeles Silvers. Which add up to what? To such things as building more glass boxes and covering them with mirrored plate glass so as to reflect the glass boxes next door and distort their boring straight lines into curves.",
          image: require("../assets/c4.jpg"),
        },
        {
          id: "05",
          title: "Planetary Suburbia",
          caption: "J. G. Ballard, Date/Origin Unknown",
          text:
            "I consider the city to be an outdated structure, incapable of expressing the deep dreams of our time. Cities seem very old-fashioned to me… Now, we communicate by electronic means. The Internet is, above all, the dream of suburbia. I see the future as a kind of planetary suburbia, an infinity of boredom interrupted by unpredictable acts of violence.",
          image: require("../assets/c5.jpg"),
        },
        {
          id: "06",
          title: "Jumbled Spatiality",
          caption: "Edward Soja, Postmetropolis, 2000",
          text:
            "Interwoven with the jumbled spatiality of the globalized postfordist exopolis is a recomposed sociality that has become similarly fluid, fragmented, decentered, and rearranged in complex patterns that are only beginning to be recognized, understood, and effectively studied.",
          image: require("../assets/c6.jpg"),
        },
        {
          id: "07",
          title: "Intruder in the Fortress",
          caption: "J. G. Ballard, Date/Origin Unknown",
          text:
            "People worry about security in their office buildings.That's always a key indicator of internal stress: the obsession with the invisible intruder in the fortress—the other self, the silent brother who clones himself off from the unconscious.",
          image: require("../assets/c7.jpg"),
        },
        {
          id: "08",
          title: "Endlessly Reenacted",
          caption: "Rem Koolhaas, Delirious New York, 1978",
          text:
            "Therefore, the performance can never end or even progress in the conventional sense of dramatic plotting; it can only be the cyclic restatement of a single theme: creation and destruction irrevocably interlocked, endlessly reenacted. The only suspense in the spectacle comes from the constantly escalating intensity of the performance.",
          image: require("../assets/c8.jpg"),
        },
        {
          id: "09",
          title: "Unrelated Objects",
          caption: "J. G. Ballard, Date/Origin Unknown",
          text:
            "I don't take anything at its face value—the angle between 2 walls, the perspectives that a given street or a given corridor offer to me. I regard all these as data which will play their role in whatever hypothesis I'm proposing to offer, to explain the significance of mysterious and apparently unrelated objects, this huge network of ciphers, and encoded instructions—perhaps—that surround us in reality.",
          image: require("../assets/c9.jpg"),
        },
        {
          id: "10",
          title: "Reisdential Buildings",
          caption: "Le Corbusier, The City of Tomorrow and Its Planning, 1929",
          text:
            'For business: sky-scrapers sixty storeys high with no internal wells or courtyards. Residential buildings with "set-backs", of six double storeys; again with no internal wells: the flats looking on either side on co immense parks. Residential buildings on the "cellular" principle, with "hanging gardens," looking on to immense parks; again no internal wells. These are "service-flats" of the most modern kind.',
          image: require("../assets/c10.jpg"),
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        location.reload();
      }
    },
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




