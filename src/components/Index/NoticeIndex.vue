<template>

  <div class="notice-wrapper">

    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="notice-left-wrapper">
        <div-header :header="'大赛焦点'"></div-header>

        <single-notice :title="'2018大赛安排公布'" :time="'2018-03-10'"
                       :link="'http://mooctest.org/#/Routine'"></single-notice>
        <single-notice :title="'2018大赛报名通道正式开启'" :time="'2018-03-10'"
                       :link="'http://www.mooctest.net/contest/list'"></single-notice>
        <single-notice :title="'2018大赛论坛火热开启'" :time="'2018-03-10'"
                       :link="'http://forum.mooctest.net/'"></single-notice>
        <single-notice :title="'2018北美赛圆满落幕'" :time="'2018-01-28'"
                       :link="'http://mooctest.org/#/American2018'"></single-notice>

        <button class="more-button" @click="goToNoticePage">查看更多</button>
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
  import {router} from '../../main'

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
    methods: {
      goToNoticePage() {
        router.push({name: 'NoticePage'})
      }
    }
  }
</script>

<style scoped src="./NoticeIndex.css"></style>
