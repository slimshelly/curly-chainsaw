<template>
  <div class="thumbnail has_title">
    <a :href="linkUrl" class="image-link">
      <div class="thumb_image scroll-transition-fade">
        <img :src="imgSrc" />
      </div>
      <div class="title">
        <span>{{ titleText }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    linkUrl: {
      type: String,
      required: true,
    },
    titleText: {
      type: String,
      required: true,
    },
  },
  name: "Thumbnail",
};
</script>

<style scoped>
.thumbnail {
  padding: 0.25rem;
  width: 50%;
  position: relative;
}

.title {
  opacity: 0;
  font-size: 8rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-family: HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, sans-serif, "Helvetica Neue Light", Icons;
  font-style: normal;
  line-height: 1.1;

  position: absolute;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  padding: 0.5rem 1.2rem 0.7rem 1.5rem;
  margin: 0rem;
}

.thumbnail:hover .title {
  opacity: 1;
}

img {
  width: 100%;
  height: auto;
  margin-left: 0%;
  margin-top: -0.25rem;
}
</style>