<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    国际赛事
  </div>

</template>

<script>

  export default {
    name: 'routine-title',
    components: {},
    data() {
      let name = 'international.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./InternationalTitle.css"></style>
