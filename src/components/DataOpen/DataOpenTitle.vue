<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    数据开放
    <div class="english-title">Data Open</div>
  </div>

</template>

<script>

  export default {
    name: 'routine-title',
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

<style scoped src="./DataOpenTitle.css"></style>
