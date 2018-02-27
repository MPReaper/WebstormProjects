<template>

  <div class="notice-wrapper">
    <div class="notice-left-wrapper">
      <div-header :header="'大赛焦点'"></div-header>

      <single-notice v-for="item in 5" :key="item"></single-notice>

      <button class="more-button">查看更多</button>
    </div>

    <photo></photo>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleNotice from './SingleNotice.vue'
  import Photo from './Photo.vue'

  export default {
    name: 'notice',
    components: {
      DivHeader,
      SingleNotice,
      Photo
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./NoticeIndex.css"></style>
