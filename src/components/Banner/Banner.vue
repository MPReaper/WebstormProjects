<template>
  <div class="banner-wrapper">
    <div class="img-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
      <div class="title-wrapper">
        <div class="main-title">
          2018全国大学生软件测试大赛
        </div>
        <div class="sub-title">
          National Student Contest of Software Testing
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'banner',
    components: {},
    data() {
      let name = 'banner.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Banner.css"></style>
