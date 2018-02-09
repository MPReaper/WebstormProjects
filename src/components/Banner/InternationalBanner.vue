<template>
  <div class="banner-wrapper">
    <div class="img-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
      <div class="title-wrapper">
        <div class="main-title">
          IEEE 国际软件测试大赛
        </div>
        <div class="sub-title">
          IEEE International Software Testing Contest
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'international-banner',
    components: {},
    data() {
      let name = 'international-banner.jpeg';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Banner.css"></style>
