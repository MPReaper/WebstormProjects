<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    嵌入式测试
  </div>

</template>

<script>

  export default {
    name: 'embed-title',
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
