<template>

  <div class="notice-wrapper">

    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="notice-left-wrapper">
        <div-header :header="'大赛焦点'"></div-header>

        <single-notice v-for="item in 5" :key="item"></single-notice>

        <button class="more-button">查看更多</button>
      </div>
    </el-col>

    <photo class="hidden-sm-and-down"></photo>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleNotice from './SingleNotice.vue'
  import Photo from './Photo.vue'
  import 'element-ui/lib/theme-chalk/display.css'
  import {Col} from 'element-ui'

  export default {
    name: 'notice',
    components: {
      DivHeader,
      SingleNotice,
      Photo,
      elCol: Col
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./NoticeIndex.css"></style>
