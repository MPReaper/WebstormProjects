<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    Web安全测试
    <a target="_blank" :href="'http://www.mooctest.net/contest/list'">
      <button class="sign-button">立即报名</button>
    </a>
  </div>

</template>

<script>

  export default {
    name: 'security-title',
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
