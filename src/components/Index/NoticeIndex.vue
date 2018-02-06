<template>

  <div class="notice-wrapper">
    <div-header :header="'大赛通知'"></div-header>

    <single-notice v-for="item in 5" :key="item"></single-notice>

    <button class="more-button">查看更多</button>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleNotice from './SingleNotice.vue'

  export default {
    name: 'notice',
    components: {
      DivHeader,
      SingleNotice
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./NoticeIndex.css"></style>
