<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    大赛通知
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

<style scoped src="./NoticeTitle.css"></style>
