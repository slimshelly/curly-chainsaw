<template>
  <div class="page_container">
    <div class="content_container">
      <div class="content">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationPage",
  data() {
    return {
      title: "Bureaucracy and Labyrinth, Perfect Crimes of the Self and City",
      artists: [
        {
          name: "Franz Kafka",
          bio:
            "(Prague, Czech Republic, 1883-1924) was a German-speaking Bohemian novelist and short-story writer, widely regarded as one of the major figures of 20th-century literature.",
          quote:
            "It is claimed that the doorkeeper does not know the inside of the Law, only the path outside the entrance which he has to keep walking up and down. The ideas he has of the inside are considered childish, and it is assumed that he himself fears the things he wants to make the man afraid of.",
        },
        {
          name: "Jorge Luis Borges",
          bio:
            "(Buenos Aires, Argentina, 1899-1986) was an Argentine short-story writer, essayist, poet and translator, and a key figure in Spanish-language and universal literature.",
          quote:
            "I imagined a labyrinth of labyrinths, a maze of mazes, a twisting, turning, ever-widening labyrinth that contained both past and future and somehow implied the stars. Absorbed in those illusory imaginings, I forgot that I was a pursued man; I felt myself, for an indefinite while, the abstract perceiver of the world. The vague, living countryside, the moon, the remains of the day did their work in me; so did the gently downward road, which forestalled all possibility of weariness. The evening was near, yet infinite.",
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




