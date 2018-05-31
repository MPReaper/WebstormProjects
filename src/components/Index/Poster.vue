<template>
  <a :href="bannerUrl" target="_blank">
    <div class="poster-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }"></div>
  </a>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'sub-index',
    components: {
      DivHeader
    },
    data() {
      let name = 'poster.jpg';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Poster.css"></style>
