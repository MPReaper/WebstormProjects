<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    开发者测试
  </div>

</template>

<script>

  export default {
    name: 'developer-title',
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

<style scoped src="./SubTitle.css"></style>
