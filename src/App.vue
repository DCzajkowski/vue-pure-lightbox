<template>
  <Lightbox
    class="lb-demo"
    :thumbnail="thumbnail"
    :images="images"
    :openAt="1"
  >
    <LightboxDefaultLoader slot="loader" />
    <div slot="content" slot-scope="{ url }">
      <iframe
        v-if="url.includes('youtube') || url.includes('youtu.be')"
        :src="url"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="width: 100%; height: 90vh;"
      />
      <img v-else :src="url">
    </div>
  </Lightbox>
</template>

<script>
  import Lightbox, { LightboxDefaultLoader } from './Components/Lightbox.vue'

  export default {
    components: {
      Lightbox,
      LightboxDefaultLoader,
    },
    data() {
      return {
        thumbnail: "http://placekitten.com/g/100/100",
        images: [
          "http://placekitten.com/g/200/300",
          "http://placekitten.com/g/600/400",
          "https://bit.ly/2r8tNLH",
          "https://www.youtube.com/watch?v=Z4j5rJQMdOU",
        ]
      }
    }
  }
</script>

<style scoped>
  .lb-demo {
    height: 100px;
    width: 100px;
  }
</style>
