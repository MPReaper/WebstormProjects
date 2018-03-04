<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    开发者测试
    <a target="_blank" :href="'http://www.mooctest.net/contest/list'">
      <button class="sign-button">立即报名</button>
    </a>
  </div>

</template>

<script>

  export default {
    name: 'developer-title',
    components: {},
    data() {
      let name = 'sub.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./SubTitle.css"></style>
