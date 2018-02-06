<template>

  <div class="figure-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">

    <div-header :header="'大赛介绍'"></div-header>

    <div class="figure-item-wrapper">
      <div class="title">参与人数</div>
      <div class="figure">20000+</div>
    </div>

    <div class="figure-item-wrapper">
      <div class="title">涉及高校</div>
      <div class="figure">400+</div>
    </div>

    <div class="figure-item-wrapper">
      <div class="title">遍及地区</div>
      <div class="figure">54</div>
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
