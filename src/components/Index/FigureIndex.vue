<template>

  <div class="figure-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">

    <div class="figure-item-wrapper">
      <div class="title">参赛人次</div>
      <div class="figure">25000+</div>
    </div>

    <div class="figure-item-wrapper">
      <div class="title">涉及高校</div>
      <div class="figure">330+</div>
    </div>

    <div class="figure-item-wrapper">
      <div class="title">遍及省份</div>
      <div class="figure">32</div>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'sub-index',
    components: {
      DivHeader
    },
    data() {
      let name = 'figure.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./FigureIndex.css"></style>
